import { createInventorySheet } from '../controllers/InventorySheetController';

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');
router.post('/:id/criar_inventario', verifyToken, createInventorySheet);


module.exports = router
