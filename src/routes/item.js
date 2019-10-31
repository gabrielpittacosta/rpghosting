import { getItem, getItens } from '../controllers/ItensController';
const express = require('express');
const router = express.Router();

router.get('/', getItens);
router.get('/:nome', getItem);

module.exports = router