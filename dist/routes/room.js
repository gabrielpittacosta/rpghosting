"use strict";

var _RoomController = require("../controllers/RoomController");

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/authorization');

router.get('/', _RoomController.getRoom);
router.get('/:name/adicionaruser/:id', _RoomController.addUser);
router.post('/criarsala', verifyToken, _RoomController.createRoom);
router.get('/:id', verifyToken, _RoomController.getOneRoom);
router["delete"]('/delete/:id', verifyToken, _RoomController.deleteRoom);
router.put('/update/:id', verifyToken, _RoomController.updateRoom);
module.exports = router;