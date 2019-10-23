const models = require('../index')
module.exports = (sequelize, DataTypes) => {
    const CharacterSheetResistTest = sequelize.define('CharacterSheetResistTest', {
        check_proficiencia_forca: DataTypes.BOOLEAN,
        modificador_forca: DataTypes.INTEGER,
        check_proficiencia_destreza: DataTypes.BOOLEAN,
        modificador_destreza: DataTypes.INTEGER,
        check_proficiencia_constituicao: DataTypes.BOOLEAN,
        valor_constituicao: DataTypes.INTEGER,
        check_proficiencia_inteligencia: DataTypes.BOOLEAN,
        modificador_inteligencia: DataTypes.INTEGER,
        check_proficiencia_sabedoria: DataTypes.BOOLEAN,
        modificador_sabedoria: DataTypes.INTEGER,
        check_proficiencia_carisma: DataTypes.BOOLEAN,
        modificador_carisma: DataTypes.INTEGER,
    } )
  
    return CharacterSheetResistTest
  }
  