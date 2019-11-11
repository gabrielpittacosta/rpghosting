module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    id:{ 
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    descricao: DataTypes.STRING,
    numJogadores: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    senha: DataTypes.STRING,
    privado: DataTypes.BOOLEAN,
    jogadores: DataTypes.ARRAY(DataTypes.JSON)
  })

  return Room
}
