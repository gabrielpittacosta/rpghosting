const HttpStatus = require('http-status')

const defaultResponse = (data, status = HttpStatus.OK) => ({
  data,
  status
})

const errorResponse = (message, status = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
  status
}, status)

class UsersController {
  constructor (modelUser) {
    this.Users = modelUser
  }

  getAll () {
    return this.Users
      .findAll({})
      .then(rs => defaultResponse(rs))
      .catch(e => errorResponse(e.message))
  }

  getById (params) {
    return this.Users
      .findOne({ where: params })
      .then(rs => rs)
      .catch(e => e)
  }

  create (data) {
    return this.Users
      .create(data)
      .then(rs => rs)
      .catch(e => e)
  }

  update (data, params) {
    return this.Users
      .update(data, { where: params })
      .then(rs => rs)
      .catch(e => e)
  }

  delete (params) {
    return this.Users
      .destroy({ where: params })
      .then(rs => rs)
      .catch(e => e)
  }

  async signin (data) {
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
        const result = await this.Users.findOne({ where: { email } })
        const user = await result

        if (user) {
          const isPassword = await this.Users.verifyPassword(user.password, password)

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
}
module.exports = UsersController
