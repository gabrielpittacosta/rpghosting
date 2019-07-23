const UserController = require('../controllers/UserController')

module.exports = (app) => {
  const usersController = new UserController(app.datasource.models.User)

  app.route('/users')
    .get((req, res) => {
      usersController.getAll()
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          console.log(error)
          res.status(400)
        })
    })
  app.route('/users/cadastro')
    .post((req, res) => {
      usersController.create(req.body)
        .then(rs => {
          res.json(rs)
          res.status(201)
        })
        .catch(error => {
          console.log(error)
          res.status(422)
        })
    })

  app.route('/users/:id')
    .get((req, res) => {
      usersController.getById(req.params)
        .then(rs => {
          res.json(rs)
        })
        .catch(error => {
          console.log(error)
          res.status(400)
        })
    })
    .put((req, res) => {
      usersController.update(req.body, req.params)
        .then(rs => {
          res.json(rs)
        })
        .catch(error => {
          console.log(error)
          res.status(422)
        })
    })
    .delete((req, res) => {
      usersController.delete(req.params)
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
