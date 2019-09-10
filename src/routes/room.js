import { getRoom, getOneRoom, createRoom, deleteRoom, updateRoom } from '../controllers/RoomController'

const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authorization');

// /sala/
router.get('/', verifyToken, getRoom);
// /sala/criarsala
router.post('/criarsala', verifyToken, createRoom);
// /sala/roomId
router.get('/:id', verifyToken, getOneRoom);
// /sala/delete/roomId
router.delete('/delete/:id', verifyToken, deleteRoom);
// /sala/update/roomId
router.put('/update/:id', verifyToken, updateRoom);

module.exports = router
