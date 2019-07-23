"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var config = require('./config/database');

var datasource = require('./models/index');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/user');

var authRouter = require('./routes/auth');

var authorization = require('./config/auth');

var app = express();
app.use(cors());
var port = 3000;
app.set('port', port);
app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.json({
  limit: '5mb'
}));
var auth = authorization(app);
app.use(auth.initialize());
app.auth = auth;
indexRouter(app);
usersRouter(app);
authRouter(app);
app.listen(app.get('port'), function () {
  console.log("Servidor rodando na porta ".concat(app.get('port')));
});
module.exports = app;