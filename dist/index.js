"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var expressValidator = require('express-validator');

var PORT = process.env.PORT || 8000;
var app = express();
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', require('./routes'));
app.listen(PORT, function () {
  console.log('Servidor rodando http:// ');
});
module.exports = app;