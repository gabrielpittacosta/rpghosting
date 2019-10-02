"use strict";

var _UserController = require("../controllers/UserController");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var connection = require('../models/index').sequelize;

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/authorization'); // /user/


router.get('/', verifyToken, _UserController.getUser,
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))); // /user/cadastro

router.post('/cadastro', _UserController.createUser); // /user/userId

router.get('/:id', verifyToken, _UserController.getOneUser); // /user/delete/userId

router["delete"]('/delete/:id', verifyToken, _UserController.deleteUser); // /user/update/userId

router.put('/update/:id', verifyToken, _UserController.updateUser);
module.exports = router;