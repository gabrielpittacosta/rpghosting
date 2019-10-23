module.exports = (sequelize, DataTypes) => {
    const CharacterSheetExpertise = sequelize.define('CharacterSheetExpertise', {
        check_proficiencia_acrobacia: DataTypes.BOOLEAN,
        check_proficiencia_arcanismo: DataTypes.BOOLEAN,
        check_proficiencia_atletismo: DataTypes.BOOLEAN,
        check_proficiencia_atuacao: DataTypes.BOOLEAN,
        check_proficiencia_blefar: DataTypes.BOOLEAN,
        check_proficiencia_furtividade: DataTypes.BOOLEAN,
        check_proficiencia_historia: DataTypes.BOOLEAN,
        check_proficiencia_intimidacao: DataTypes.BOOLEAN,
        check_proficiencia_intuicao: DataTypes.BOOLEAN,
        check_proficiencia_investigacao: DataTypes.BOOLEAN,
        check_proficiencia_lidar_com_animais: DataTypes.BOOLEAN,
        check_proficiencia_medicina: DataTypes.BOOLEAN,
        check_proficiencia_natureza: DataTypes.BOOLEAN,
        check_proficiencia_percepcao: DataTypes.BOOLEAN,
        check_proficiencia_persuasao: DataTypes.BOOLEAN,
        check_proficiencia_prestidigitacao: DataTypes.BOOLEAN,
        check_proficiencia_religiao: DataTypes.BOOLEAN,
        check_proficiencia_sobrevivencia: DataTypes.BOOLEAN,
        
        modificador_acrobacia: DataTypes.INTEGER,
        modificador_arcanismo: DataTypes.INTEGER,
        modificador_atletismo: DataTypes.INTEGER,
        modificador_atuacao: DataTypes.INTEGER,
        modificador_blefar: DataTypes.INTEGER,
        modificador_furtividade: DataTypes.INTEGER,
        modificador_historia: DataTypes.INTEGER,
        modificador_intimidacao: DataTypes.INTEGER,
        modificador_intuicao: DataTypes.INTEGER,
        modificador_lidar_com_animais: DataTypes.INTEGER,
        modificador_medicina: DataTypes.INTEGER,
        modificador_natureza: DataTypes.INTEGER,
        modificador_percepcao: DataTypes.INTEGER,
        modificador_persuasao: DataTypes.INTEGER,
        modificador_prestidigitacao: DataTypes.INTEGER,
        modificador_religiao: DataTypes.INTEGER,
        modificador_sobrevivencia: DataTypes.INTEGER,
    } )
  
    return CharacterSheetExpertise
  }
  