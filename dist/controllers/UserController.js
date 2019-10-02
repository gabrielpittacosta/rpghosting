"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = getUser;
exports.getOneUser = getOneUser;
exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.signin = signin;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var models = require('../models/index');

var Ficha = require('../models/index').Ficha;

var Room = require('../models/index').Room;

function getUser(_x, _x2) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return models.User.findAll({
              include: [{
                model: Room,
                as: 'room'
              }, {
                model: Ficha,
                as: 'ficha'
              }]
            });

          case 3:
            users = _context.sent;
            res.status(201).json({
              data: users
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
  return _getUser.apply(this, arguments);
}

function getOneUser(_x3, _x4) {
  return _getOneUser.apply(this, arguments);
}

function _getOneUser() {
  _getOneUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return models.User.findOne({
              where: {
                id: id
              }
            });

          case 4:
            user = _context2.sent;
            res.status(201).json({
              data: user
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
  return _getOneUser.apply(this, arguments);
}

function createUser(_x5, _x6) {
  return _createUser.apply(this, arguments);
}

function _createUser() {
  _createUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var erros, _req$body, name, username, email, password, novoUsuario;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            req.assert("name", "Campo nome é obrigatório ").notEmpty();
            req.assert("username", "Campo username é obrigatório ").notEmpty();
            req.assert("email", "Campo email é obrigatório ").notEmpty();
            req.assert("password", "Campo senha é obrigatório ").notEmpty();
            erros = req.validationErrors();

            if (erros) {
              console.log('Erros de validação foram encontrados');
              res.status(400).send(erros);
            }

            _req$body = req.body, name = _req$body.name, username = _req$body.username, email = _req$body.email, password = _req$body.password;
            _context3.next = 10;
            return models.User.create({
              name: name,
              username: username,
              email: email,
              password: password
            }, {
              fields: ['name', 'username', 'email', 'password']
            });

          case 10:
            novoUsuario = _context3.sent;

            if (!novoUsuario) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              data: 'Usuario criado'
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
  return _createUser.apply(this, arguments);
}

function deleteUser(_x7, _x8) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = _asyncToGenerator(
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
            return models.User.destroy({
              where: {
                id: id
              }
            });

          case 4:
            deletRowCount = _context4.sent;
            res.status(201).json({
              message: 'Usuario deletado com sucesso',
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
  return _deleteUser.apply(this, arguments);
}

function updateUser(_x9, _x10) {
  return _updateUser.apply(this, arguments);
}

function _updateUser() {
  _updateUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var erros, id, _req$body2, name, password, email, users;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            req.assert("name", "Campo nome é obrigatório ").notEmpty();
            req.assert("email", "Campo email é obrigatório ").notEmpty();
            req.assert("password", "Campo senha é obrigatório ").notEmpty();
            erros = req.validationErrors();

            if (erros) {
              console.log('Erros de validação foram encontrados');
              res.status(400).send(erros);
            }

            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, password = _req$body2.password, email = _req$body2.email;
            _context6.next = 10;
            return models.User.findAll({
              where: {
                id: id
              },
              attributes: ['id', 'name', 'email', 'password']
            });

          case 10:
            users = _context6.sent;

            if (users.length > 0) {
              users.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(user) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return user.update({
                            individualHooks: true,
                            name: name,
                            password: password,
                            email: email
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x12) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.status(201).json({
              message: 'Usuario atualizado',
              data: users
            }));

          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            console.log('Erro ao insirir no banco ' + _context6.t0);
            res.status(500).send(_context6.t0);

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return _updateUser.apply(this, arguments);
}

function signin(_x11) {
  return _signin.apply(this, arguments);
}

function _signin() {
  _signin = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(data) {
    var response, email, password, result, user, isPassword;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            response = {
              login: {
                id: null,
                isValid: false,
                message: 'login invalido'
              }
            };

            if (!(data.email && data.password)) {
              _context7.next = 27;
              break;
            }

            email = data.email;
            password = data.password;
            _context7.prev = 4;
            _context7.next = 7;
            return models.User.findOne({
              where: {
                email: email
              }
            });

          case 7:
            result = _context7.sent;
            _context7.next = 10;
            return result;

          case 10:
            user = _context7.sent;

            if (!user) {
              _context7.next = 21;
              break;
            }

            _context7.next = 14;
            return models.User.verifyPassword(user.password, password);

          case 14:
            isPassword = _context7.sent;
            console.log('VERIFICAÇÃO DA SENHA ->' + isPassword);

            if (!isPassword) {
              _context7.next = 21;
              break;
            }

            response.login.id = user.id;
            response.login.isValid = isPassword;
            response.login.message = 'LOGADO COM SUCESSO';
            return _context7.abrupt("return", response);

          case 21:
            _context7.next = 27;
            break;

          case 23:
            _context7.prev = 23;
            _context7.t0 = _context7["catch"](4);
            console.log('Erro ao insirir no banco ' + _context7.t0);
            res.status(500).send(_context7.t0);

          case 27:
            return _context7.abrupt("return", response);

          case 28:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[4, 23]]);
  }));
  return _signin.apply(this, arguments);
}