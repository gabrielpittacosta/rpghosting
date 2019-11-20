const bcrypt = require('bcrypt')
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
  }, {
    hooks: {
      async beforeCreate (room) {
        try {
          const salt = await bcrypt.genSalt(10);
          const passwordHash = await bcrypt.hash(room.senha, salt);
          room.set('senha', passwordHash);
        } catch (e) {
          console.error(e);
        }
      }
    }
  })

  Room.verifyPassword = async (password, passwordHash) => {
    try {
      if (await bcrypt.compare(passwordHash, password)) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }
  

  return Room
}
