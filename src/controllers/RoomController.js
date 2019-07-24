const HttpStatus = require('http-status')

const defaultResponse = (data, status = HttpStatus.OK) => ({
  data,
  status
})

const errorResponse = (message, status = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
  status
}, status)

class RoomsController {
  constructor (modelRoom) {
    this.Rooms = modelRoom
  }

  getAll () {
    return this.Rooms
      .findAll({})
      .then(rs => defaultResponse(rs))
      .catch(e => errorResponse(e.message))
  }

  getById (params) {
    return this.Rooms
      .findOne({ where: params })
      .then(rs => rs)
      .catch(e => e)
  }

  create (data) {
    return this.Rooms
      .create(data)
      .then(rs => rs)
      .catch(e => e)
  }

  update (data, params) {
    return this.Rooms
      .update(data, { where: params })
      .then(rs => rs)
      .catch(e => e)
  }

  delete (params) {
    return this.Rooms
      .destroy({ where: params })
      .then(rs => rs)
      .catch(e => e)
  }
}
module.exports = RoomsController
