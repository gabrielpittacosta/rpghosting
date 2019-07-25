module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    numJogadores: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  })
  Room.associate = function (models) {
    Room.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
  }
  return Room
}
