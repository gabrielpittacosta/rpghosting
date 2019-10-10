import { getDado, rollDados} from '../controllers/DadoController';

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.post('/rolldados', rollDados);

module.exports = router
