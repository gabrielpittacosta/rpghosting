const express = require('express');
const router = express.Router();
const login = require('../middleware/authentication');

router.post('/', login)

module.exports = router
