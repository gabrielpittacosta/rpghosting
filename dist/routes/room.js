"use strict";

var _RoomController = require("../controllers/RoomController");

var express = require('express');

var router = express.Router();

var verifyToken = require('../middleware/authorization'); // /sala/


router.get('/', verifyToken, _RoomController.getRoom); // /sala/criarsala

router.post('/criarsala', verifyToken, _RoomController.createRoom); // /sala/roomId

router.get('/:id', verifyToken, _RoomController.getOneRoom); // /sala/delete/roomId

router["delete"]('/delete/:id', verifyToken, _RoomController.deleteRoom); // /sala/update/roomId

router.put('/update/:id', verifyToken, _RoomController.updateRoom);
module.exports = router;