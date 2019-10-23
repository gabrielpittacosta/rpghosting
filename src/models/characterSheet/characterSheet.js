module.exports = (sequelize, DataTypes) => {
    const CharacterSheet = sequelize.define('CharacterSheet', {
        proficiencia_bonus: DataTypes.INTEGER,
        classe_de_armadura: DataTypes.INTEGER,
        iniciativa: DataTypes.INTEGER,
        deslocamento: DataTypes.INTEGER,
        defesas: DataTypes.STRING,
        condicoes: DataTypes.STRING,
        pontos_de_vida_atual: DataTypes.INTEGER,
        pontos_de_vida_maximo: DataTypes.INTEGER,
        pontos_de_vida_temporario: DataTypes.INTEGER,
        danos_de_vida_total: DataTypes.STRING,
        danos_de_vida_atual: DataTypes.STRING,
        sabedoria_passiva: DataTypes.INTEGER
    })
  
    return CharacterSheet
  }
  