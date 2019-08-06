"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var HttpStatus = require('http-status');

var jwt = require('jsonwebtoken');

var UsersControllers = require('../controllers/UserController');

module.exports = function (app) {
  var usersControllers = new UsersControllers(app.datasource.models.User);
  app.route('/login').post(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var response, login, payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return usersControllers.signin(req.body);

            case 3:
              response = _context.sent;
              login = response.login;
              console.log(login);

              if (login.id && login.isValid) {
                payload = {
                  id: login.id
                };
                res.json({
                  message: 'LOGADO COM SUCESSO',
                  token: jwt.sign({
                    data: payload
                  }, app.config.jwt.secret, {
                    expiresIn: '1h'
                  })
                });
              } else {
                res.json({
                  message: 'FALHA AO AUTENTICAR'
                });
                res.sendStatus(HttpStatus.UNAUTHORIZED);
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.sendStatus(HttpStatus.UNAUTHORIZED);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};