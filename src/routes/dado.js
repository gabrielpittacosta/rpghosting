import { getDado, rollDados} from '../controllers/DadoController';

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.post('/rolldados',verifyToken, rollDados);

module.exports = router
