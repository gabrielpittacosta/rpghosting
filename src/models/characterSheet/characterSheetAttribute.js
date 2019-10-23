const models = require('../index')
module.exports = (sequelize, DataTypes) => {
    const CharacterSheetAttribute = sequelize.define('CharacterSheetAttribute', {
        modificador_forca: DataTypes.INTEGER,
        valor_forca: DataTypes.INTEGER,
        modificador_destreza: DataTypes.INTEGER,
        valor_destreza: DataTypes.INTEGER,
        modificador_constituicao: DataTypes.INTEGER,
        valor_constituicao: DataTypes.INTEGER,
        modificador_inteligencia: DataTypes.INTEGER,
        valor_inteligencia: DataTypes.INTEGER,
        modificador_sabedoria: DataTypes.INTEGER, 
        valor_sabedoria: DataTypes.INTEGER, 
        modificador_carisma: DataTypes.INTEGER, 
        valor_carisma: DataTypes.INTEGER
    } )
  
    return CharacterSheetAttribute
  }
  