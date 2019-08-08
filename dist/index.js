"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var app = express();
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', require('./routes'));
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Servidor rodando http://%s:%s', host, port);
});
module.exports = app;