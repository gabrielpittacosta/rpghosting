import { signin } from '../controllers/UserController'

const express = require('express')
const router = express.Router()

const config = require('../config/database')
const HttpStatus = require('http-status')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
  try {
    const response = await signin(req.body)
    const login = response.login

    console.log(login)
    if (login.id && login.isValid) {
      const payload = { id: login.id }
      res.json({
        message: 'LOGADO COM SUCESSO',
        token: jwt.sign({ data: payload }, config.jwt.secret, { expiresIn: '1h' })
      })
    } else {
      res.json({ message: 'FALHA AO AUTENTICAR' })
      res.sendStatus(HttpStatus.UNAUTHORIZED)
    }
  } catch (e) {
    console.error(e)
    res.sendStatus(HttpStatus.UNAUTHORIZED)
  }
})
module.exports = router
