"use strict";

var jwt = require('jsonwebtoken');

var config = require('../config/database');

module.exports = function (req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, config.jwt.secret);
    req.userData = decoded;
    next();
  } catch (e) {
    return res.status(401).json({
      message: 'LOGIN INVALIDO'
    });
  }
};