"use strict";

var _UserController = require("../controllers/UserController");

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/authorization'); // /user/


router.get('/', verifyToken, _UserController.getUser); // /user/cadastro

router.post('/cadastro', _UserController.createUser); // /user/userId

router.get('/:id', verifyToken, _UserController.getOneUser); // /user/delete/userId

router["delete"]('/delete/:id', verifyToken, _UserController.deleteUser); // /user/update/userId

router.put('/update/:id', verifyToken, _UserController.updateUser);
module.exports = router;