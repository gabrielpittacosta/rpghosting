import { sanitizeBody } from 'express-validator/filter';

const { check } = require('express-validator/check')
const models = require('../models/index')


const regrasDeValidacaoCreateRoom = () => { return[
    check('name')
        .not().isEmpty().withMessage('Campo nome é obrigatório'),

    check('descricao')
        .not().isEmpty().withMessage('Campo descrição é obrigatório')
        .isString().withMessage('Formato inválido'),

    check('numJogadores')
        .not().isEmpty().withMessage('É obrigatório inserir o número de jogadores')
        .isInt(),

    check('privado')
        .not().isEmpty().withMessage('É obrigatório escolher entre privado ou público')
        .isBoolean().withMessage('Formato inválido'),

    sanitizeBody('*')
      .trim()
      .escape(),
]}

module.exports = {
    regrasDeValidacaoCreateRoom,
  }