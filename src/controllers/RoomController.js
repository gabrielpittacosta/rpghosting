import { sequelize } from '../models';
const models = require('../models/index');
const User = require('../models/index').User


export async function getRoom (req, res) {
  try {
    await models.Room.findAll({
      attributes:['name','descricao','numJogadores','senha','privado','jogadores'],
      include: [{ 
          model: models.CharacterSheetInfo, 
          as: 'characterSheetInfo' 
        },
        { 
          model: User, as: 'dono_da_sala',
          attributes: ['username','isMestre'] 
        }
      ]})
      .then((rooms) => res.status(200).json({ data: rooms }))
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function getOneRoom (req, res) {
  try {
    const { id } = req.params;
    await models.Room.findOne({ where: { id } })
       .then((room)=> res.status(200).json({ data: room }));
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function getUsernameRoom (req, res) {
  try {
    const username = req.params.username
    const user = await models.User.findOne({where: {'username':username}, attributes:['id']})
    await models.Room.findAll({
      where: {'userId':user.id},
      attributes:['name','descricao','numJogadores','senha','privado','jogadores'],
      include: [{ 
          model: models.CharacterSheetInfo, 
          as: 'characterSheetInfo' 
        },
        { 
          model: User, as: 'dono_da_sala',
          attributes: ['username','isMestre'] 
        }
      ]})
      .then((rooms) => res.status(200).json({ data: rooms }))
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function createRoom (req, res) {
  try {
    const { name, descricao, numJogadores, privado, senha } = req.body;
    const userId = req.userData.data.id
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
    const mestre = await models.User.findOne({where: room.userId})
    const jogadores = []
    if(username !== mestre.username){
      if(room.jogadores.length < room.numJogadores){
        const checkUser = room.jogadores.find(jogador => jogador === NewUser.username)
        if(checkUser){
          return res.status(400).json({message:'Usuário já está na sala'});
        }else{
          await models.Room.update({'jogadores': sequelize.fn('array_append', sequelize.col('jogadores'), NewUser.username)},
          {where: { 'id': id }}).then(()=> res.status(200).json({ dataUser: NewUser, dataRoom: room, Array: jogadores }))
        }
      }else{
        return res.status(400).json({message:'Sala está cheia'});
      }
    }else{
      return res.status(400).json({message:'Este usuário é dono da sala'});
    }
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}