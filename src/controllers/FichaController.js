const models = require('../models/index')

export async function getFichas (req, res) {
  try {
    const fichas = await models.Ficha.findAll()
    res.json({ data: fichas })
  } catch (error) {
    console.error(error)
  }
}

export async function getOneFicha (req, res) {
  try {
    const { id } = req.params
    const ficha = await models.Ficha.findOne({ where: { id } })
    res.json({ data: ficha })
  } catch (error) {
    console.error(error)
  }
}

export async function createFicha (req, res) {
  try {
    const { nomeJogador, nomePersonagem, userId, roomId } = req.body
    let newFicha = await models.Ficha.create({
      nomeJogador,
      nomePersonagem,
      userId,
      roomId
    }, {
      fields: ['nomeJogador', 'nomePersonagem', 'userId', 'roomId']
    })
    if (newFicha) {
      return res.json({
        message: 'FIcha criada com sucesso',
        data: newFicha
      })
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deleteFicha (req, res) {
  try {
    const { id } = req.params
    const deletRowCount = await models.Ficha.destroy({ where: { id } })
    res.json({
      message: 'Ficha deletada com sucesso',
      count: deletRowCount
    })
  } catch (error) {
    console.error(error)
  }
}

export async function updateFicha (req, res) {
  const { id } = req.params
  const { nomeJogador, nomePersonagem, classe, nivel,
    raca, antecedente, tendencia, pontosXp, inspiracao,
    bonusProeficiencia, testesResistencia, pericias,
    sabedoriaPassivaPercepcao, idiomasEProfeciencias, classeArmadura,
    pontosVidaAtual, pontosVidaTemporario, dadosDeVida, testesContraAMorte,
    ataquesEMagia, equipamentos, caracteristicasEHabilidades, tracosDePersonalidade,
    ideias, ligacoes, defeitos } = req.body

  const fichas = await models.Ficha.findAll({
    individualHooks: true,
    attributes: ['id', 'nomeJogador', 'nomePersonagem', 'classe', 'nivel', 'raca', 'antecedente',
      'tendencia', 'pontosXp', 'inspiracao', 'bonusProeficiencia', 'testesResistencia',
      'pericias', 'sabedoriaPassivaPercepcao', 'idiomasEProfeciencias', 'classeArmadura', 'pontosVidaAtual',
      'pontosVidaTemporario', 'dadosDeVida', 'testesContraAMorte', 'ataquesEMagia', 'equipamentos',
      'caracteristicasEHabilidades', 'tracosDePersonalidade', 'ideias', 'ligacoes', 'defeitos' ],
    whrere: { id }
  })
  if (fichas.length > 0) {
    fichas.forEach(async ficha => {
      await ficha.update({
        nomeJogador,
        nomePersonagem,
        classe,
        nivel,
        raca,
        antecedente,
        tendencia,
        pontosXp,
        inspiracao,
        bonusProeficiencia,
        testesResistencia,
        pericias,
        sabedoriaPassivaPercepcao,
        idiomasEProfeciencias,
        classeArmadura,
        pontosVidaAtual,
        pontosVidaTemporario,
        dadosDeVida,
        testesContraAMorte,
        ataquesEMagia,
        equipamentos,
        caracteristicasEHabilidades,
        tracosDePersonalidade,
        ideias,
        ligacoes,
        defeitos
      })
    })
  }
  return res.json({
    message: 'Sala atualizada',
    data: fichas
  })
}
