import { signin } from '../controllers/UserController';

const express = require('express');
const router = express.Router();

const config = require('../config/database');
const HttpStatus = require('http-status');
const jwt = require('jsonwebtoken');

const models = require('../models/index')

router.post('/', async (req, res) => {
  try {    
    const response = await signin(req.body);
    const login = response.login;
    const user = await models.User.findOne({attributes: ['name','email','username','isMestre']},{ where: login.id })
    
    if (login.id && login.isValid) {
      const payload = { id: login.id };
      res.status(200).json({
        message: 'LOGADO COM SUCESSO',
        userLogado: user,
        token: jwt.sign({ data: payload }, config.jwt.secret, { expiresIn: '1h' })
      })
    } else {
      res.status(400).json({ message: 'FALHA AO AUTENTICAR' });
      res.sendStatus(HttpStatus.UNAUTHORIZED);
    }
  } catch (e) {
    res.sendStatus(HttpStatus.UNAUTHORIZED);
  }
})
module.exports = router
