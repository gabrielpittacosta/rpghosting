import { getUser, getOneUser, createUser, deleteUser, updateUser } from '../controllers/UserController';

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');
const { userValidationRules, validate } = require('../middleware/validation');

router.get('/', verifyToken, getUser);
router.post('/cadastro', userValidationRules(), validate, createUser);
router.get('/:id', verifyToken, getOneUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.put('/update/:id', verifyToken, updateUser);

module.exports = router