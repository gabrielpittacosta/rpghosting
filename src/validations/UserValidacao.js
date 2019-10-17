import { sanitizeBody } from 'express-validator/filter';

const { check } = require('express-validator/check')
const models = require('../models/index')

const regrasDeValidacaoCreateUser = () => {
  return [
    check('name')
      .not().isEmpty().withMessage('Campo nome é obrigatório')
      .matches('[a-z]').withMessage('Campo nome contem pelo menos uma letra minuscula')
      .isLength({ min: 3, max: 30 }).withMessage('Campo nome tem no minimo 3 caracteres e no máximo 30 caracteres'),

    check('username')
      .not().isEmpty().withMessage('Campo username é obrigatório')
      .isLength({ min: 4, max: 16 }).withMessage('Campo username tem no minimo 4 caracteres e no máximo 16 caracteres')
      .matches('[a-z]').withMessage('Campo username contem pelo menos uma letra minuscula')
      .isAlphanumeric().withMessage('Campo username tem apenas caracteres e numeros')
      .custom( username => {
        return models.User.findOne({ where: { username } }).then(user => {
          if (user === null) {
            return true
          } else {
            return false
          }
        })
      }).withMessage('Campo username já existe'),

    check('email')
      .not().isEmpty().withMessage('Campo email é obrigatório')
      .isEmail().withMessage('Campo email está no formato errado')
      .custom(email => {
        return models.User.findOne({ where: { email } }).then(user => {
          if (user === null) {
            return true
          } else {
            return false
          }
        })
      }).withMessage('Este email já existe'),

    check('password')
      .not().isEmpty().withMessage('Campo senha é obrigatório')
      .isLength({ min: 5 }).withMessage('Campo senha tem no minimo 5 caracteres'),

    sanitizeBody('*')
      .trim()
      .escape(),
  ]
}

const regrasDeValidacaoUpdateUser = () => { return[] }

module.exports = {
    regrasDeValidacaoCreateUser,
    regrasDeValidacaoUpdateUser,
  }