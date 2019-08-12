module.exports = (sequelize, DataTypes) => {
  const Dado = sequelize.define('Dado', {
    nome: DataTypes.STRING,
    lados: DataTypes.INTEGER
  })

  return Dado
}
