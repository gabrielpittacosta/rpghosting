"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoom = getRoom;
exports.getOneRoom = getOneRoom;
exports.createRoom = createRoom;
exports.deleteRoom = deleteRoom;
exports.updateRoom = updateRoom;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var models = require('../models/index');

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
            return models.Room.findAll();

          case 3:
            rooms = _context.sent;
            res.json({
              data: rooms
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
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
            res.json({
              data: room
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 11:
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
    var _req$body, name, descricao, numJogadores, userId, newRoom;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, name = _req$body.name, descricao = _req$body.descricao, numJogadores = _req$body.numJogadores, userId = _req$body.userId;
            _context3.next = 4;
            return models.Room.create({
              name: name,
              descricao: descricao,
              numJogadores: numJogadores,
              userId: userId
            }, {
              fields: ['name', 'descricao', 'numJogadores', 'userId']
            });

          case 4:
            newRoom = _context3.sent;

            if (!newRoom) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Sala criada com sucesso',
              data: newRoom
            }));

          case 7:
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
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
            res.json({
              message: 'Sala deletada com sucesso',
              count: deletRowCount
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 11:
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
    var id, _req$body2, name, descricao, rooms;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, descricao = _req$body2.descricao;
            _context6.next = 4;
            return models.Room.findAll({
              individualHooks: true,
              attributes: ['id', 'name', 'descricao'],
              whrere: {
                id: id
              }
            });

          case 4:
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

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'Sala atualizada',
              data: rooms
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateRoom.apply(this, arguments);
}