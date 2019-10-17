const models = require('../models/index');
export async function getUser(req, res) {
  try {
    await models.User.findAll({ include: [{ model: models.Room, as: 'room', }, { model: models.Ficha, as: 'ficha' }], })
      .then(users => res.status(201).json({ data: users }));
  } catch(erro) {
    res.status(500).send(erro);
  }
}

export async function getOneUser(req, res) {
  try {
    const { id } = req.params;
    await models.User.findOne({ where: { id } })
      .then(user => res.status(201).json({ data: user }));
  } catch(erro) {
    res.status(500).send(erro);
  }
}

export async function createUser(req, res) {
  try {
    const { name, username, email, password } = req.body;
    await models.User.create({ name, username, email, password }, { fields: ['name', 'username', 'email', 'password'] })
      .then(() => res.status(201).json({ data: 'Usuário criado' }));
  } catch(erro) {
    res.status(500).send(erro);
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await models.User.destroy({ where: { id } })
      .then(deletRowCount => res.status(201).json({ data: 'Usuário deletado com sucesso', count: deletRowCount }));
  } catch(erro) {
    res.status(500).send(erro);
  }
}

export async function updateUser (req, res) {
  try {
    const { id } = req.params;
    const { name, password, email } = req.body;
    const users = await models.User.findAll({ where: { id }, attributes: ['id', 'name', 'email', 'password'] });
    if (users.length > 0) {
      users.forEach(async user => {
        await user.update({ individualHooks: true, name, password, email })
      })
    }
    return res.status(201).json({ message: 'Usuario atualizado', data: users });
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function signin (data) {
  const response = { login: { id: null, isValid: false, message: 'login invalido' } }
  if(data.username && data.password) {
    const username = data.username;
    const password = data.password;
    try {
      const result = await models.User.findOne({ where: { username } });
      const user = await result;
      if(user) {
        const isPassword = await models.User.verifyPassword(user.password, password);
        if(isPassword) {
          response.login.id = user.id
          response.login.isValid = isPassword
          response.login.message = 'LOGADO COM SUCESSO'
          return response
        }
      }
    } catch(erro) {
      res.status(500).send(erro);
    }
  }
  return response;
}