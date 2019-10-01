import { getRoom, getOneRoom, createRoom, deleteRoom, updateRoom, addUser } from '../controllers/RoomController'
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.get('/', getRoom);
router.get('/:name/adicionaruser/:id', addUser);          
router.post('/criarsala', verifyToken, createRoom);
router.get('/:id', verifyToken, getOneRoom);
router.delete('/delete/:id', verifyToken, deleteRoom);
router.put('/update/:id', verifyToken, updateRoom);

module.exports = router