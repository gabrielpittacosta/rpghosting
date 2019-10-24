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

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.User = require('./user')(sequelize, Sequelize);
db.Room = require('./room')(sequelize, Sequelize);
db.CharacterSheet = require('./characterSheet/characterSheet')(sequelize, Sequelize);
db.CharacterSheetInfo = require('./characterSheet/characterSheetInfo')(sequelize, Sequelize);
db.CharacterSheetAttribute = require('./characterSheet/characterSheetAttribute')(sequelize, Sequelize);
db.CharacterSheetResistTest = require('./characterSheet/characterSheetResistTest')(sequelize, Sequelize);
db.CharacterSheetExpertise = require('./characterSheet/characterSheetExpertise')(sequelize, Sequelize);
db.Dado = require('./dado')(sequelize, Sequelize);


db.User.hasMany(db.CharacterSheetInfo, { foreignKey: 'userId', as: 'characterSheetInfo' });
db.CharacterSheetInfo.belongsTo(db.User, { foreignKey: 'userId', as: 'user'});

db.User.hasMany(db.Room, { foreignKey: 'userId', as: 'room' });
db.Room.belongsTo(db.User, { foreignKey: 'userId', as: 'dono_da_sala' });

db.Room.hasMany(db.CharacterSheetInfo, { foreignKey: 'roomId', as: 'characterSheetInfo' });
db.CharacterSheetInfo.belongsTo(db.Room, { foreignKey: 'roomId', as: 'room' });

db.CharacterSheetInfo.hasOne(db.CharacterSheet, { foreignKey: 'characterSheetInfoId', as: 'characterSheet' });
db.CharacterSheet.belongsTo(db.CharacterSheetInfo, { foreignKey: 'characterSheetInfoId', as: 'characterSheetInfo' });

db.CharacterSheet.hasOne(db.CharacterSheetAttribute, { foreignKey: 'characterSheetId', as: 'characterSheetAttribute' });
db.CharacterSheetAttribute.belongsTo(db.CharacterSheet, { foreignKey: 'characterSheetId', as: 'characterSheet' });

db.CharacterSheet.hasOne(db.CharacterSheetResistTest, { foreignKey: 'characterSheetId', as: 'characterSheetResistTest' });
db.CharacterSheetResistTest.belongsTo(db.CharacterSheet, { foreignKey: 'characterSheetId', as: 'characterSheet' });

db.CharacterSheet.hasOne(db.CharacterSheetExpertise, { foreignKey: 'characterSheetId', as: 'characterSheetExpertise' });
db.CharacterSheetExpertise.belongsTo(db.CharacterSheet, { foreignKey: 'characterSheetId', as: 'characterSheet' });


module.exports = db  