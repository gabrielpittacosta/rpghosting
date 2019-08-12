import { getDado, rollD4, rollD6, rollD8, rollD10, rollD20 } from '../controllers/DadoController'

const express = require('express')
const router = express.Router()

const verifyToken = require('../middleware/authorization')

// /dados/
router.get('/', verifyToken, getDado)
// /dados/rollD4
router.post('/rolld4', verifyToken, rollD4)
// /dados/rollD6
router.post('/rolld6', verifyToken, rollD6)
// /dados/rollD8
router.post('/rolld8', verifyToken, rollD8)
// /dados/rollD10
router.post('/rolld10', verifyToken, rollD10)
// /dados/rollD20
router.post('/rolld20', verifyToken, rollD20)

module.exports = router
