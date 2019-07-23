"use strict";

var UserController = require('../controllers/UserController');

module.exports = function (app) {
  var usersController = new UserController(app.datasource.models.User);
  app.route('/users').get(function (req, res) {
    usersController.getAll().then(function (data) {
      res.json(data);
    })["catch"](function (error) {
      console.log(error);
      res.status(400);
    });
  });
  app.route('/users/cadastro').post(function (req, res) {
    usersController.create(req.body).then(function (rs) {
      res.json(rs);
      res.status(201);
    })["catch"](function (error) {
      console.log(error);
      res.status(422);
    });
  });
  app.route('/users/:id').get(function (req, res) {
    usersController.getById(req.params).then(function (rs) {
      res.json(rs);
    })["catch"](function (error) {
      console.log(error);
      res.status(400);
    });
  }).put(function (req, res) {
    usersController.update(req.body, req.params).then(function (rs) {
      res.json(rs);
    })["catch"](function (error) {
      console.log(error);
      res.status(422);
    });
  })["delete"](function (req, res) {
    usersController["delete"](req.params).then(function (rs) {
      res.json(rs);
      res.status(204);
    })["catch"](function (error) {
      console.log(error);
      res.status(422);
    });
  });
};