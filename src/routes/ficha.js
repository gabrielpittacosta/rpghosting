import { getFichas, getOneFicha, createFicha, deleteFicha, updateFicha } from '../controllers/FichaController'

const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/authorization')

// /ficha/
router.get('/', verifyToken, getFichas)
// /ficha/cadastro
router.post('/criar_ficha', verifyToken, createFicha)
// /ficha/fichaId
router.get('/:id', verifyToken, getOneFicha)
// /ficha/delete/fichaId
router.delete('/delete/:id', verifyToken, deleteFicha)
// /ficha/update/fichaId
router.put('/update/:id', verifyToken, updateFicha)

module.exports = router
