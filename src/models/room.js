module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    numJogadores: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  })

  return Room
}
