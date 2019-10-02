"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoom = getRoom;
exports.getOneRoom = getOneRoom;
exports.createRoom = createRoom;
exports.deleteRoom = deleteRoom;
exports.updateRoom = updateRoom;
exports.addUser = addUser;

var _models = require("../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var models = require('../models/index');

var User = require('../models/index').User;

var Ficha = require('../models/index').Ficha;

function getRoom(_x, _x2) {
  return _getRoom.apply(this, arguments);
}

function _getRoom() {
  _getRoom = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var rooms;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return models.Room.findAll({
              include: [{
                model: Ficha,
                as: 'ficha'
              }, {
                model: User,
                as: 'user'
              }]
            });

          case 3:
            rooms = _context.sent;
            res.status(201).json({
              data: rooms
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('Erro ao insirir no banco ' + _context.t0);
            res.status(500).send(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getRoom.apply(this, arguments);
}

function getOneRoom(_x3, _x4) {
  return _getOneRoom.apply(this, arguments);
}

function _getOneRoom() {
  _getOneRoom = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, room;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return models.Room.findOne({
              where: {
                id: id
              }
            });

          case 4:
            room = _context2.sent;
            res.status(201).json({
              data: room
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log('Erro ao insirir no banco ' + _context2.t0);
            res.status(500).send(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneRoom.apply(this, arguments);
}

function createRoom(_x5, _x6) {
  return _createRoom.apply(this, arguments);
}

function _createRoom() {
  _createRoom = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var erros, _req$body, name, descricao, numJogadores, userId, privado, senha, newRoom;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            req.assert("name", "Campo nome é obrigatório ").notEmpty();
            req.assert("descricao", "Campo descriçãp é obrigatório ").notEmpty();
            req.assert("numJogadores", "Campo numero de jogadores é obrigatório ").notEmpty();
            req.assert("privado", "Campo privado/publico é obrigatório ").notEmpty();
            erros = req.validationErrors();

            if (erros) {
              console.log('Erros de validação foram encontrados');
              res.status(400).send(erros);
            }

            _req$body = req.body, name = _req$body.name, descricao = _req$body.descricao, numJogadores = _req$body.numJogadores, userId = _req$body.userId, privado = _req$body.privado, senha = _req$body.senha;
            _context3.next = 10;
            return models.Room.create({
              name: name,
              descricao: descricao,
              numJogadores: numJogadores,
              userId: userId,
              privado: privado,
              senha: senha
            }, {
              fields: ['name', 'descricao', 'numJogadores', 'userId', 'privado', 'senha']
            });

          case 10:
            newRoom = _context3.sent;

            if (!newRoom) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: 'Sala criada com sucesso',
              data: newRoom
            }));

          case 13:
            _context3.next = 19;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            console.log('Erro ao insirir no banco ' + _context3.t0);
            res.status(500).send(_context3.t0);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return _createRoom.apply(this, arguments);
}

function deleteRoom(_x7, _x8) {
  return _deleteRoom.apply(this, arguments);
}

function _deleteRoom() {
  _deleteRoom = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deletRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return models.Room.destroy({
              where: {
                id: id
              }
            });

          case 4:
            deletRowCount = _context4.sent;
            res.status(201).json({
              message: 'Sala deletada com sucesso',
              count: deletRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log('Erro ao insirir no banco ' + _context4.t0);
            res.status(500).send(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteRoom.apply(this, arguments);
}

function updateRoom(_x9, _x10) {
  return _updateRoom.apply(this, arguments);
}

function _updateRoom() {
  _updateRoom = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var erros, id, _req$body2, name, descricao, rooms;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            req.assert("name", "Campo nome de jogadores é obrigatório ").notEmpty();
            req.assert("descricao", "Campo descrição é obrigatório ").notEmpty();
            erros = req.validationErrors();

            if (erros) {
              console.log('Erros de validação foram encontrados');
              res.status(400).send(erros);
            }

            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, descricao = _req$body2.descricao;
            _context6.next = 9;
            return models.Room.findAll({
              individualHooks: true,
              attributes: ['id', 'name', 'descricao'],
              whrere: {
                id: id
              }
            });

          case 9:
            rooms = _context6.sent;

            if (rooms.length > 0) {
              rooms.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(room) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return room.update({
                            name: name,
                            descricao: descricao
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.status(201).json({
              message: 'Sala atualizada',
              data: rooms
            }));

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            console.log('Erro ao insirir no banco ' + _context6.t0);
            res.status(500).send(_context6.t0);

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 14]]);
  }));
  return _updateRoom.apply(this, arguments);
}

function addUser(_x11, _x12) {
  return _addUser.apply(this, arguments);
}

function _addUser() {
  _addUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var id, name, NewUser, room;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            name = req.params.name;
            _context8.next = 5;
            return models.User.findOne({
              where: {
                id: id
              }
            });

          case 5:
            NewUser = _context8.sent;
            _context8.next = 8;
            return models.Room.findOne({
              where: {
                name: name
              }
            });

          case 8:
            room = _context8.sent;

            if (room.length > 0) {
              room.forEach(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee7(rooms) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return room.update({
                            'jogadores': _models.sequelize.fn('array_append', _models.sequelize.col('jogadores'), NewUser)
                          }, {
                            'where': {
                              'id': id
                            }
                          });

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x14) {
                  return _ref2.apply(this, arguments);
                };
              }());
            }

            res.status(200).json({
              dataUser: NewUser,
              dataRoom: room
            });
            _context8.next = 17;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            console.log('Erro ao insirir no banco ' + _context8.t0);
            res.status(500).send(_context8.t0);

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 13]]);
  }));
  return _addUser.apply(this, arguments);
}