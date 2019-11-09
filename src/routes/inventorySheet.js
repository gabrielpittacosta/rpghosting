import { getInventorySheet ,createInventorySheet, addItemToInventorySheet } from '../controllers/InventorySheetController';

const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authorization');

router.get('/', verifyToken, getInventorySheet);
router.post('/:id/criar_inventario', verifyToken, createInventorySheet);
router.post('/:id/additem', verifyToken, addItemToInventorySheet);


module.exports = router
