module.exports = (sequelize, DataTypes) => {
  const CharacterSheet = sequelize.define('CharacterSheet', {
    nomeJogador: DataTypes.STRING,
    nomePersonagem: DataTypes.STRING,
    classe: DataTypes.STRING,
    nivel: DataTypes.INTEGER,
    raca: DataTypes.STRING,
    antecedente: DataTypes.STRING,
    tendencia: DataTypes.STRING,
    pontosXp: DataTypes.INTEGER,
    inspiracao: DataTypes.INTEGER,
    bonusProeficiencia: DataTypes.INTEGER,
    testesResistencia: DataTypes.INTEGER,
    pericias: DataTypes.INTEGER,
    sabedoriaPassivaPercepcao: DataTypes.INTEGER,
    idiomasEProfeciencias: DataTypes.STRING,
    classeArmadura: DataTypes.STRING,
    pontosVidaAtual: DataTypes.INTEGER,
    pontosVidaTemporario: DataTypes.INTEGER,
    dadosDeVida: DataTypes.STRING,
    testesContraAMorte: DataTypes.STRING,
    ataquesEMagia: DataTypes.STRING,
    equipamentos: DataTypes.STRING,
    caracteristicasEHabilidades: DataTypes.STRING,
    tracosDePersonalidade: DataTypes.STRING,
    ideias: DataTypes.STRING,
    ligacoes: DataTypes.INTEGER,
    defeitos: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  })

  return CharacterSheet
}
