const jwt = require('jsonwebtoken')
const config = require('../config/database')
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, config.jwt.secret)
    req.userData = decoded
    next()
  } catch (e) {
    return res.status(401).json({
      message: 'LOGIN INVALIDO'
    })
  }
}
