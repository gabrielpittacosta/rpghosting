import { format } from 'util';
import { sequelize } from '../models';

const models = require('../models/index');
const User = require('../models/index').User
const Ficha = require('../models/index').Ficha

export async function getRoom (req, res) {
  try {
    await models.Room.findAll({ include: [{ model: Ficha, as: 'characterSheetInfo' }, { model: User, as: 'user' }]})
      .then((rooms) => res.status(201).json({ data: rooms }))
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function getOneRoom (req, res) {
  try {
    const { id } = req.params;
    await models.Room.findOne({ where: { id } })
      .then((room)=> res.status(201).json({ data: room }));
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function createRoom (req, res) {
  try {
    const { name, descricao, numJogadores, userId, privado, senha } = req.body;
    if(privado == true){
      req.assert("senha", "Campo senha é obrigatório ").notEmpty();
      var erros = req.validationErrors();
      if(erros){
        console.log('Erros de validação foram encontrados');
        res.status(400).send(erros);
      }else{
        await models.Room.create({ name, descricao, numJogadores, userId, privado, senha },
          { fields: ['name', 'descricao', 'numJogadores', 'userId', 'privado', 'senha'] })
            .then((newPrivateRoom) => res.status(201).json({ message: 'Sala criada com sucesso', data: newPrivateRoom }))
      }
    } else {
      await models.Room.create({ name, descricao, numJogadores, userId, privado, senha },
        { fields: ['name', 'descricao', 'numJogadores', 'userId', 'privado', 'senha'] })
          .then((newPublicRoom) => res.status(201).json({ message: 'Sala criada com sucesso', data: newPublicRoom }))
    }
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function deleteRoom (req, res) {
  try {
    const { id } = req.params;
    const deletRowCount = await models.Room.destroy({ where: { id } });
    res.status(201).json({ message: 'Sala deletada com sucesso', count: deletRowCount });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function updateRoom (req, res) {
  try {
    req.assert("name", "Campo nome de jogadores é obrigatório ").notEmpty();
    req.assert("descricao", "Campo descrição é obrigatório ").notEmpty();
    var erros = req.validationErrors();
    if(erros){
      console.log('Erros de validação foram encontrados');
      res.status(400).send(erros);
    }
    const { id } = req.params;
    const { name, descricao } = req.body;
    const rooms = await models.Room.findAll({ individualHooks: true, attributes: ['id', 'name', 'descricao'], whrere: { id } });
    if (rooms.length > 0) {
      rooms.forEach(async room => {
        await room.update({ name, descricao })
      })
    }
    return res.status(201).json({ message: 'Sala atualizada', data: rooms });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function addUser (req, res) {
  try{
    const { id } = req.params;
    const { username } = req.body;
    const NewUser = await models.User.findOne({ where:{ username } });
    const room = await models.Room.findOne({ where:{ id } })
    const jogadores = []
    jogadores.push(NewUser)
    await models.Room.update({'jogadores': sequelize.fn('array_append', sequelize.col('jogadores'), NewUser)},
      {'where':{'jogadores':NewUser}}).then((novaSala)=>{
        res.status(200).jsson({ dataUser: NewUser, dataRoom: room, Array: jogadores, NovaSala:novaSala })
      })
    return ;
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}