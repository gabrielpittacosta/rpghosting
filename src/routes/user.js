import { getUser, getOneUser, createUser, deleteUser, updateUser, verificacaoEmail } from '../controllers/UserController';

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, getUser);

router.post('/cadastro', createUser);
router.post('/verificacao', verificacaoEmail)
router.get('/:id', verifyToken, getOneUser);

router.delete('/delete/:id', verifyToken, deleteUser);

router.put('/update/:id', verifyToken, updateUser);

module.exports = router