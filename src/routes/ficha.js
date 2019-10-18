import { getFichas, getOneFicha, createFicha, deleteFicha, updateFicha } from '../controllers/FichaController';

const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, getFichas);
router.post('/criar_ficha', createFicha);
router.get('/:id', verifyToken, getOneFicha);
router.delete('/delete/:id', verifyToken, deleteFicha);
router.put('/update/:id', verifyToken, updateFicha);

module.exports = router
