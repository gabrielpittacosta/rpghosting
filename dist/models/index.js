"use strict";

var fs = require('fs');

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../config/config.js')[env];

var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize; // TABELAS

db.User = require('./user')(sequelize, Sequelize);
db.Room = require('./room')(sequelize, Sequelize);
db.Ficha = require('./ficha')(sequelize, Sequelize);
db.Dado = require('./dado')(sequelize, Sequelize); // ASSOCIAÇÕES
// USUARIO 1:N FICHA

db.User.hasMany(db.Ficha, {
  foreignKey: 'userId',
  as: 'ficha'
});
db.Ficha.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user'
}); // USUARIO N:N SALA

db.User.hasMany(db.Room, {
  foreignKey: 'userId',
  as: 'room'
});
db.Room.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user'
}); // SALA 1:N FICHA

db.Room.hasMany(db.Ficha, {
  foreignKey: 'roomId',
  as: 'ficha'
});
db.Ficha.belongsTo(db.Room, {
  foreignKey: 'roomId',
  as: 'room'
});
module.exports = db;