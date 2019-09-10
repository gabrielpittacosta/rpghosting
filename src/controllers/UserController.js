const models = require('../models/index')
const Ficha = require('../models/index').Ficha
const Room = require('../models/index').Room

export async function getUser (req, res) {
  try {
    const users = await models.User.findAll({
      include: [{
        model: Room,
        as: 'room',
        include: [{
          model: Ficha,
          as: 'ficha'
        }]
      }]
    })
    res.json({
      data: users
    })
  } catch (error) {
    console.error(error)
    res.json({ message: 'Ocorreu um erro' })
  }
}

export async function getOneUser (req, res) {
  try {
    const { id } = req.params
    const user = await models.User.findOne({ where: { id } })
    res.json({
      data: user
    })
  } catch (error) {
    console.error(error)
    res.json({ message: 'Ocorreu um erro' })
  }
}

export async function createUser (req, res) {
  try {
    const { name, username, email, password } = req.body
    let newUser = await models.User.create({
      name,
      username,
      email,
      password
    }, {
      fields: ['name', 'username', 'email', 'password']
    })
    if (newUser) {
      return res.json({
        message: 'Usuario criado com sucesso',
        data: newUser
      })
    }
  } catch (error) {
    console.error(error)
    res.json({ message: 'Ocorreu um erro' })
  }
}

export async function deleteUser (req, res) {
  try {
    const { id } = req.params
    const deletRowCount = await models.User.destroy({ where: { id } })
    res.json({
      message: 'Usuario deletado com sucesso',
      count: deletRowCount
    })
  } catch (error) {
    console.error(error)
    res.json({ message: 'Ocorreu um erro' })
  }
}

export async function updateUser (req, res) {
  try {
    const { id } = req.params
    const { name, password, email } = req.body
    const users = await models.User.findAll({
      where: { id },
      attributes: ['id', 'name', 'email', 'password']
    })
    if (users.length > 0) {
      users.forEach(async user => {
        await user.update({
          individualHooks: true,
          name,
          password,
          email
        })
      })
    }
    return res.json({
      message: 'Usuario atualizado',
      data: users
    })
  } catch (e) {
    console.log(e)
    res.json({ message: 'Ocorreu um erro' })
  }
}

export async function signin (data) {
  const response = {
    login: {
      id: null,
      isValid: false,
      message: 'login invalido'
    }
  }
  if (data.email && data.password) {
    const email = data.email
    const password = data.password

    try {
      const result = await models.User.findOne({ where: { email } })
      const user = await result

      if (user) {
        const isPassword = await models.User.verifyPassword(user.password, password)

        console.log('VERIFICAÇÃO DA SENHA ->' + isPassword)
        if (isPassword) {
          response.login.id = user.id
          response.login.isValid = isPassword
          response.login.message = 'LOGADO COM SUCESSO'

          return response
        }
      }
    } catch (e) {
      console.error(e)
    }
  }
  return response
}
