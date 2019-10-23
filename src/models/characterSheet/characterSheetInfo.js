const models = require('../index')
module.exports = (sequelize, DataTypes) => {
    const CharacterSheetInfo = sequelize.define('CharacterSheetInfo', {
        nome_personagem: DataTypes.STRING,
        classe: DataTypes.STRING,
        raca: DataTypes.STRING,
        antecedentes: DataTypes.STRING,
        tendencia: DataTypes.STRING,
        level: DataTypes.INTEGER,
        experiencia: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        roomId: DataTypes.INTEGER
    } )
  
    return CharacterSheetInfo
  }
  