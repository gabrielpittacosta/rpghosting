import { signin } from '../controllers/UserController';
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const HttpStatus = require('http-status');
const models = require('../models/index')
module.exports = async (req, res, next) => {
    try {    
      const response = await signin(req.body);
      const login = response.login;
      const user = await models.User.findOne({ where: login.id, attributes:['id','name','username'] })
      if (login.id && login.isValid) {
        const payload = { id: login.id };
        return res.status(200).json({
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
  }