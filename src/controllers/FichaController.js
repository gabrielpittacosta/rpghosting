import { CharacterSheet } from '../models';

const models = require('../models/index');

export async function getFichas (req, res) {
  try {
    const fichas = await models.CharacterSheetInfo.findAll({ 
      include: [{ 
        model: models.CharacterSheet, 
        as: 'characterSheet', 
        include: [
          { 
            model: models.CharacterSheetAttribute,
            as: 'characterSheetAttribute' },
          { 
            model: models.CharacterSheetResistTest,
            as: 'characterSheetResistTest' },
          { 
            model: models.CharacterSheetExpertise,
            as: 'characterSheetExpertise' }
          ]
      }]
    });
    res.status(201).json({ data: fichas });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function getOneFicha (req, res) {
  try {
    const { id } = req.params;
    const ficha = await models.CharacterSheetInfo.findOne({ where: { id }, 
      include: [{ 
        model: models.CharacterSheet, 
        as: 'characterSheet', 
        include: [
          { 
            model: models.CharacterSheetAttribute,
            as: 'characterSheetAttribute' },
          { 
            model: models.CharacterSheetResistTest,
            as: 'characterSheetResistTest' },
          { 
            model: models.CharacterSheetExpertise,
            as: 'characterSheetExpertise' }
        ]
      }] 
    });
    res.status(201).json({ characterSheet: ficha });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function createFicha (req, res) {
  try {
    const { nome_personagem, raca, classe, antecedentes, tendencia, level, experiencia } = req.body;
    const roomId = req.params.id
    const userId = req.userData.data.id
    const jogador = await models.User.findOne({where: userId});
    const sala = await models.Room.findOne({where: {'id':roomId}});
    if(sala.userId == userId){
      await models.CharacterSheetInfo.create({ nome_personagem, raca, classe, antecedentes, tendencia, level, experiencia, userId, roomId},
        { fields: ['nome_personagem', 'raca', 'classe', 'antecedentes', 'level', 'experiencia', 'userId', 'roomId'] })
          .then(async (newFicha)=> {
            const characterSheetInfoId = newFicha.id
            await models.CharacterSheet.create({ characterSheetInfoId },{ fields: ['characterSheetInfoId'] })
              .then(async (newFicha)=> {
                const characterSheetId = newFicha.id
                await models.CharacterSheetAttribute.create({ characterSheetId },{ fields: ['characterSheetId'] })
              .then(async (newFicha)=> {
                const characterSheetId = newFicha.id
                await models.CharacterSheetResistTest.create({ characterSheetId },{ fields: ['characterSheetId'] })
              .then(async (newFicha)=>{
                const characterSheetId = newFicha.id
                await models.CharacterSheetExpertise.create({ characterSheetId },{ fields: ['characterSheetId'] })                
                })  
              })
            })
      }).then((newFicha)=> {
          res.status(201).json({ message: 'Ficha criada com sucesso', data: newFicha, jogador: jogador, sala: sala })
      })  
    }else{
      return res.status(400).json({ message: 'É necessário estar na sala para criar ficha' });
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


