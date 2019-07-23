"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HttpStatus = require('http-status');

var defaultResponse = function defaultResponse(data) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HttpStatus.OK;
  return {
    data: data,
    status: status
  };
};

var errorResponse = function errorResponse(message) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HttpStatus.BAD_REQUEST;
  return defaultResponse({
    error: message,
    status: status
  }, status);
};

var UsersController =
/*#__PURE__*/
function () {
  function UsersController(modelUser) {
    _classCallCheck(this, UsersController);

    this.Users = modelUser;
  }

  _createClass(UsersController, [{
    key: "getAll",
    value: function getAll() {
      return this.Users.findAll({}).then(function (rs) {
        return defaultResponse(rs);
      })["catch"](function (e) {
        return errorResponse(e.message);
      });
    }
  }, {
    key: "getById",
    value: function getById(params) {
      return this.Users.findOne({
        where: params
      }).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      return this.Users.create(data).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "update",
    value: function update(data, params) {
      return this.Users.update(data, {
        where: params
      }).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "delete",
    value: function _delete(params) {
      return this.Users.destroy({
        where: params
      }).then(function (rs) {
        return rs;
      })["catch"](function (e) {
        return e;
      });
    }
  }, {
    key: "signin",
    value: function () {
      var _signin = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        var response, email, password, result, user, isPassword;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                response = {
                  login: {
                    id: null,
                    isValid: false,
                    message: 'login invalido'
                  }
                };

                if (!(data.email && data.password)) {
                  _context.next = 26;
                  break;
                }

                email = data.email;
                password = data.password;
                _context.prev = 4;
                _context.next = 7;
                return this.Users.findOne({
                  where: {
                    email: email
                  }
                });

              case 7:
                result = _context.sent;
                _context.next = 10;
                return result;

              case 10:
                user = _context.sent;

                if (!user) {
                  _context.next = 21;
                  break;
                }

                _context.next = 14;
                return this.Users.verifyPassword(user.password, password);

              case 14:
                isPassword = _context.sent;
                console.log('VERIFICAÇÃO DA SENHA ->' + isPassword);

                if (!isPassword) {
                  _context.next = 21;
                  break;
                }

                response.login.id = user.id;
                response.login.isValid = isPassword;
                response.login.message = 'LOGADO COM SUCESSO';
                return _context.abrupt("return", response);

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](4);
                console.error(_context.t0);

              case 26:
                return _context.abrupt("return", response);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 23]]);
      }));

      function signin(_x) {
        return _signin.apply(this, arguments);
      }

      return signin;
    }()
  }]);

  return UsersController;
}();

module.exports = UsersController;