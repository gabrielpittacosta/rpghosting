const models = require('../models/index');

export async function getFichas (req, res) {
  try {
    const fichas = await models.Ficha.findAll();
    res.status(201).json({ data: fichas });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function getOneFicha (req, res) {
  try {
    const { id } = req.params;
    const ficha = await models.Ficha.findOne({ where: { id } });
    res.status(201).json({ data: ficha });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function createFicha (req, res) {
  try {
    req.assert("nameJogador", "Campo nome do jogador de jogadores é obrigatório ").notEmpty();
    req.assert("nomePersonagem", "Campo nome do personagem é obrigatório ").notEmpty();
    var erros = req.validationErrors();
    if(erros){
      console.log('Erros de validação foram encontrados');
      res.status(400).send(erros);
    }
    const { nomeJogador, nomePersonagem, userId, roomId } = req.body;
    let newFicha = await models.Ficha.create({ nomeJogador, nomePersonagem, userId, roomId },
      { fields: ['nomeJogador', 'nomePersonagem', 'userId', 'roomId'] });
    if (newFicha) {
      return res.status(201).json({ message: 'Ficha criada com sucesso', data: newFicha });
    }
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function deleteFicha (req, res) {
  try {
    const { id } = req.params;
    const deletRowCount = await models.Ficha.destroy({ where: { id } });
    res.status(201).json({ message: 'Ficha deletada com sucesso', count: deletRowCount });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function updateFicha (req, res) {
  try {
    const { id } = req.params
    const { nomeJogador, nomePersonagem, classe, nivel,
      raca, antecedente, tendencia, pontosXp, inspiracao,
      bonusProeficiencia, testesResistencia, pericias,
      sabedoriaPassivaPercepcao, idiomasEProfeciencias, classeArmadura,
      pontosVidaAtual, pontosVidaTemporario, dadosDeVida, testesContraAMorte,
      ataquesEMagia, equipamentos, caracteristicasEHabilidades, tracosDePersonalidade,
      ideias, ligacoes, defeitos } = req.body;
  
    const fichas = await models.Ficha.findAll({
      individualHooks: true,
      attributes: ['id', 'nomeJogador', 'nomePersonagem', 'classe', 'nivel', 'raca', 'antecedente',
        'tendencia', 'pontosXp', 'inspiracao', 'bonusProeficiencia', 'testesResistencia',
        'pericias', 'sabedoriaPassivaPercepcao', 'idiomasEProfeciencias', 'classeArmadura', 'pontosVidaAtual',
        'pontosVidaTemporario', 'dadosDeVida', 'testesContraAMorte', 'ataquesEMagia', 'equipamentos',
        'caracteristicasEHabilidades', 'tracosDePersonalidade', 'ideias', 'ligacoes', 'defeitos' ],
      whrere: { id }
    });
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
    return res.status(201).json({ message: 'Sala atualizada', data: fichas });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}


export async function validarFicha(req, res, next) {
  try {
    const { id } = req.params;
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}