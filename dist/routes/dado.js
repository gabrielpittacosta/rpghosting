"use strict";

var _DadoController = require("../controllers/DadoController");

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, _DadoController.getDado);
router.post('/rolldados', _DadoController.rollDados);
module.exports = router;