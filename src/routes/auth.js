const HttpStatus = require('http-status')
const jwt = require('jsonwebtoken')
const UsersControllers = require('../controllers/UserController')

module.exports = (app) => {
  const usersControllers = new UsersControllers(app.datasource.models.User)

  app.route('/login')
    .post(async (req, res) => {
      try {
        const response = await usersControllers.signin(req.body)
        const login = response.login

        console.log(login)
        if (login.id && login.isValid) {
          const payload = { id: login.id }

          res.json({
            message: 'LOGADO COM SUCESSO',
            token: jwt.sign({ data: payload }, app.config.jwt.secret, { expiresIn: '1h' })
          })
        } else {
          res.sendStatus(HttpStatus.UNAUTHORIZED)
        }
      } catch (e) {
        console.error(e)
        res.sendStatus(HttpStatus.UNAUTHORIZED)
      }
    })
}
