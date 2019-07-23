"use strict";

var Sequelize = require('sequelize');

var fs = require('fs');

var path = require('path');

var database = null;

var loadModels = function loadModels(sequelize) {
  var dir = path.join(__dirname, './');
  var models = [];
  fs.readdirSync(dir).forEach(function (file) {
    var modelPath = path.join(dir, file);
    var model = sequelize["import"](modelPath);
    models[model.name] = model;
  });
  return models;
};

module.exports = function (app) {
  if (!database) {
    var config = app.config;
    var sequelize = new Sequelize(config.database, config.username, config.password, config.params);
    database = {
      sequelize: sequelize,
      Sequelize: Sequelize,
      models: {}
    };
    database.models = loadModels(sequelize);
    sequelize.sync().done(function () {
      return database;
    });
  }

  return database;
};