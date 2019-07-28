"use strict";

var RoomController = require('../controllers/RoomController');

var verifyToken = require('../middleware/authorization');

module.exports = function (app) {
  var roomsController = new RoomController(app.datasource.models.Room);
  app.route('/todas_as_salas').get(verifyToken, function (req, res) {
    roomsController.getAll().then(function (data) {
      res.json(data);
    })["catch"](function (error) {
      console.log(error);
      res.status(400);
    });
  });
  app.route('/criar_sala').post(verifyToken, function (req, res) {
    roomsController.create(req.body).then(function (rs) {
      res.json(rs);
      res.status(201);
    })["catch"](function (error) {
      console.log(error);
      res.status(422);
    });
  });
  app.route('/sala/:id').get(verifyToken, function (req, res) {
    roomsController.getById(req.params).then(function (rs) {
      res.json(rs);
    })["catch"](function (error) {
      console.log(error);
      res.status(400);
    });
  });
  app.route('/atualizar_sala/:id').put(verifyToken, function (req, res) {
    roomsController.update(req.body, req.params).then(function (rs) {
      res.json(rs);
    })["catch"](function (error) {
      console.log(error);
      res.status(422);
    });
  });
  app.route('/deletar_sala/:id')["delete"](verifyToken, function (req, res) {
    roomsController["delete"](req.params).then(function (rs) {
      res.json(rs);
      res.status(204);
    })["catch"](function (error) {
      console.log(error);
      res.status(422);
    });
  });
};