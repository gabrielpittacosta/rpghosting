"use strict";

var _FichaController = require("../controllers/FichaController");

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, _FichaController.getFichas);
router.post('/criar_ficha', verifyToken, _FichaController.createFicha);
router.get('/:id', verifyToken, _FichaController.getOneFicha);
router["delete"]('/delete/:id', verifyToken, _FichaController.deleteFicha);
router.put('/update/:id', verifyToken, _FichaController.updateFicha);
module.exports = router;