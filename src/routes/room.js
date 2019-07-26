const RoomController = require('../controllers/RoomController')
const verifyToken = require('../middleware/authorization')

module.exports = (app) => {
  const roomsController = new RoomController(app.datasource.models.Room)

  app.route('/todas_as_salas')
    .get(verifyToken, (req, res) => {
      roomsController.getAll()
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          console.log(error)
          res.status(400)
        })
    })

  app.route('/criar_sala')
    .post(verifyToken, (req, res) => {
      roomsController.create(req.body)
        .then(rs => {
          res.json(rs)
          res.status(201)
        })
        .catch(error => {
          console.log(error)
          res.status(422)
        })
    })

  app.route('/sala/:id')
    .get(verifyToken, (req, res) => {
      roomsController.getById(req.params)
        .then(rs => {
          res.json(rs)
        })
        .catch(error => {
          console.log(error)
          res.status(400)
        })
    })
  app.route('/atualizar_sala/:id')
    .put(verifyToken, (req, res) => {
      roomsController.update(req.body, req.params)
        .then(rs => {
          res.json(rs)
        })
        .catch(error => {
          console.log(error)
          res.status(422)
        })
    })
  app.route('/deletar_sala/:id')
    .delete(verifyToken, (req, res) => {
      roomsController.delete(req.params)
        .then(rs => {
          res.json(rs)
          res.status(204)
        })
        .catch(error => {
          console.log(error)
          res.status(422)
        })
    })
}
