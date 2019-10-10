const models = require('../models/index');
const Ficha = require('../models/index').Ficha
const Room = require('../models/index').Room
const { check, validationResult } = require('express-validator/check');

export async function getUser (req, res) {
  try {
    const users = await models.User.findAll({ include: [{ model: Room, as: 'room', }, { model: Ficha, as: 'ficha' }], });
    res.status(201).json({ data: users });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
} 

export async function getOneUser (req, res) {
  try {
    const { id } = req.params;
    const user = await models.User.findOne({ where: { id } });
    res.status(201).json({ data: user });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}
export async function createUser (req, res) {
  try {
    req.assert("name", "Campo nome é obrigatório ").notEmpty();
    req.assert("name", "Campo nome tem no minimo 4 caracteres e no máximo 16 caracteres").isLength({ min: 4 }, { max: 16 });
    req.assert("name", "Campo nome tem apenas caracteres").isString();
    req.assert("username", "Campo username é obrigatório ").notEmpty();
    req.assert("username", "Campo username tem no minimo 4 caracteres e no máximo 16 caracteres").isLength({ min: 4 }, { max: 16 });
    req.assert("email", "Campo email é obrigatório ").notEmpty();
    req.assert('email', 'Formato inválido.').isEmail();
    req.assert("password", "Campo senha é obrigatório ").notEmpty();
    req.assert("password", "Campo senha precisa ter no minimo 5 caracteres ").isLength({ min: 5 });
    // Validação user e email já existente
    /*
    req.check('username', 'O nome de usuário já existe').custom((value, {req}) => {
            return new Promise((resolve, reject) => {
              User.findOne({username:req.body.username}, function(err, user){
                if(err) {
                  reject(new Error('Server Error'))
                }
                if(Boolean(user)) {
                  reject(new Error('Username already in use'))
                }
                resolve(true)
              });
            }); 
          })
          req.assert('email', 'Já foi criada uma conta com esse email').custom(value => {
            return models.User.findUserByEmail(value).then(function(user) {
              if (user) {
                  throw new Error('Este email já entá em uso');
              }
            })
          });
    */
    var erros = req.validationErrors();
    if(erros){
      console.log('Erros de validação foram encontrados');
      res.status(400).send(erros);
    }
    const { name, username, email, password } = req.body;
    let novoUsuario = await models.User.create({ name, username, email, password }, { fields: ['name', 'username', 'email', 'password'] });
    if (novoUsuario) {
      return res.status(201).json({ data: 'Usuario criado' });
    }
  } catch (erro) {
    res.status(500).send(erro);
  }
}

export async function deleteUser (req, res) {
  try {
    const { id } = req.params;
    const deletRowCount = await models.User.destroy({ where: { id } });
    res.status(201).json({ message: 'Usuario deletado com sucesso', count: deletRowCount });
  } catch (erro) {
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function updateUser (req, res) {
  try {
    req.assert("name", "Campo nome é obrigatório ").notEmpty();
    req.assert("email", "Campo email é obrigatório ").notEmpty();
    req.assert("password", "Campo senha é obrigatório ").notEmpty();
    var erros = req.validationErrors();
    if(erros){
      console.log('Erros de validação foram encontrados');
      res.status(400).send(erros);
    }
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
    console.log('Erro ao insirir no banco ' + erro);
    res.status(500).send(erro);
  }
}

export async function signin (data) {
  const response = { login: { id: null, isValid: false, message: 'login invalido' } }
  if (data.email && data.password) {
    const email = data.email;
    const password = data.password;
    try {
      const result = await models.User.findOne({ where: { email } });
      const user = await result;
      if (user) {
        const isPassword = await models.User.verifyPassword(user.password, password);
        console.log('VERIFICAÇÃO DA SENHA ->' + isPassword)
        if (isPassword) {
          response.login.id = user.id
          response.login.isValid = isPassword
          response.login.message = 'LOGADO COM SUCESSO'
          return response
        }
      }
    } catch (erro) {
      console.log('Erro ao insirir no banco ' + erro);
      res.status(500).send(erro);
    }
  }
  return response
}