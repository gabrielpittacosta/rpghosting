const models = require('../models/index')

export async function getRoom (req, res) {
  try {
    const rooms = await models.Room.findAll({})
    res.json({
      data: rooms
    })
  } catch (error) {
    console.error(error)
  }
}

export async function getOneRoom (req, res) {
  try {
    const { id } = req.params
    const room = await models.Room.findOne({
      where: {
        id
      }
    })
    res.json({
      data: room
    })
  } catch (error) {
    console.error(error)
  }
}

export async function createRoom (req, res) {
  try {
    const { name, descricao, numJogadores, userId } = req.body
    let newRoom = await models.Room.create({
      name,
      descricao,
      numJogadores,
      userId
    }, {
      fields: ['name', 'descricao', 'numJogadores', 'userId']
    })
    if (newRoom) {
      return res.json({
        message: 'Sala criada com sucesso',
        data: newRoom
      })
    }
  } catch (error) {
    console.error(error)
  }
}

export async function deleteRoom (req, res) {
  try {
    const { id } = req.params
    const deletRowCount = await models.Room.destroy({
      where: {
        id
      }
    })
    res.json({
      message: 'Sala deletada com sucesso',
      count: deletRowCount
    })
  } catch (error) {
    console.error(error)
  }
}

export async function updateRoom (req, res) {
  const { id } = req.params
  const { name, descricao } = req.body

  const rooms = await models.Room.findAll({
    individualHooks: true,
    attributes: ['id', 'name', 'descricao'],
    whrere: {
      id
    }
  })
  if (rooms.length > 0) {
    rooms.forEach(async room => {
      await room.update({
        name,
        descricao
      })
    })
  }
  return res.json({
    message: 'Sala atualizada',
    data: rooms
  })
}
