"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function () {
        var _beforeCreate = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(user) {
          var salt, passwordHash;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return bcrypt.genSalt(10);

                case 3:
                  salt = _context.sent;
                  _context.next = 6;
                  return bcrypt.hash(user.password, salt);

                case 6:
                  passwordHash = _context.sent;
                  user.set('password', passwordHash);
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](0);
                  console.error(_context.t0);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 10]]);
        }));

        function beforeCreate(_x) {
          return _beforeCreate.apply(this, arguments);
        }

        return beforeCreate;
      }(),
      beforeUpdate: function () {
        var _beforeUpdate = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(user) {
          var salt, passwordHash;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return bcrypt.genSalt(10);

                case 3:
                  salt = _context2.sent;
                  _context2.next = 6;
                  return bcrypt.hash(user.password, salt);

                case 6:
                  passwordHash = _context2.sent;
                  user.set('password', passwordHash);
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2["catch"](0);
                  console.error(_context2.t0);

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 10]]);
        }));

        function beforeUpdate(_x2) {
          return _beforeUpdate.apply(this, arguments);
        }

        return beforeUpdate;
      }()
    }
  });

  User.verifyPassword =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(password, passwordHash) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return bcrypt.compare(passwordHash, password);

            case 3:
              if (!_context3.sent) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", true);

            case 5:
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);

            case 10:
              return _context3.abrupt("return", false);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function (_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();

  User.associate = function (models) {
    User.hasMany(models.Room, {
      as: 'rooms'
    });
  };

  return User;
};