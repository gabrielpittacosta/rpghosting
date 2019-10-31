import { getRoom, getOneRoom, createRoom, deleteRoom, updateRoom, addUser, getUsernameRoom } from '../controllers/RoomController';
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');
const { regrasDeValidacaoCreateRoom, regrasDeValidacaoEnterRoom, validate } = require('../middleware/validation');


router.get('/',verifyToken, getRoom);
router.put('/:id/adicionaruser/', addUser);          
router.post('/criarsala',regrasDeValidacaoCreateRoom(), validate, verifyToken, createRoom);
router.get('/:username', getUsernameRoom)
router.get('/:id', verifyToken, getOneRoom);
router.delete('/delete/:id', verifyToken, deleteRoom);
router.put('/update/:id', verifyToken, updateRoom);

module.exports = router