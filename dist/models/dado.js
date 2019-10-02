"use strict";

module.exports = function (sequelize, DataTypes) {
  var Dado = sequelize.define('Dado', {
    nome: DataTypes.STRING,
    lados: DataTypes.INTEGER
  });
  return Dado;
};