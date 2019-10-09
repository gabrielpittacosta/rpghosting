import { sequelize } from '../models';

const models = require('../models/index');
const User = require('../models/index').User
const Ficha = require('../models/index').Ficha

export async function getRoom (req, res) {
  try {
    const rooms = await models.Room.findAll({ include: [{ model: Ficha, as: 'ficha' }, { model: User, as: 'user' }]});
    res.status(201).json({ data: rooms });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function getOneRoom (req, res) {
  try {
    const { id } = req.params;
    const room = await models.Room.findOne({ where: { id } });
    res.status(201).json({ data: room });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function createRoom (req, res) {
  try {
    req.assert("name", "Campo nome é obrigatório ").notEmpty();
    req.assert("descricao", "Campo descriçãp é obrigatório ").notEmpty();
    req.assert("numJogadores", "Campo numero de jogadores é obrigatório ").notEmpty();
    req.assert("privado", "Campo privado/publico é obrigatório ").notEmpty();
    var erros = req.validationErrors();
    if(erros){
      console.log('Erros de validação foram encontrados');
      res.status(400).send(erros);
    }
    const { name, descricao, numJogadores, userId, privado, senha } = req.body;
    let newRoom = await models.Room.create({ name, descricao, numJogadores, userId, privado, senha },
      { fields: ['name', 'descricao', 'numJogadores', 'userId', 'privado', 'senha'] });
    if (newRoom) {
      return res.status(201).json({ message: 'Sala criada com sucesso', data: newRoom });
    }
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
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
    const room = await models.Room.findOne({ where:{ id } });
    var jogadores = [];
    for(var i = 0; i < 10; i++){
      jogadores.push(NewUser)
      console.log(jogadores);
    }
    if(room.length > 0) {
      room.forEach(async rooms => {
        await jogadores.push(rooms.update({ jogadores }))
      })  
    }
    return res.status(200).json({ dataUser: NewUser, dataRoom: room, ArrayTest: jogadores });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}