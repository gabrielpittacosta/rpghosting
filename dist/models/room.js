"use strict";

module.exports = function (sequelize, DataTypes) {
  var Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    numJogadores: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    senha: DataTypes.STRING,
    privado: DataTypes.BOOLEAN,
    jogadores: DataTypes.ARRAY(DataTypes.INTEGER)
  });
  return Room;
};