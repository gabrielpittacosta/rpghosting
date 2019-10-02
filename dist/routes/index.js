"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  res.status(201);
  res.json({
    message: 'Bem-Vindo ao RPG Hosting :)'
  });
});
router.use('/user', require('./user'));
router.use('/login', require('./auth'));
router.use('/sala', require('./room'));
router.use('/ficha', require('./ficha'));
router.use('/dados', require('./dado'));
module.exports = router;