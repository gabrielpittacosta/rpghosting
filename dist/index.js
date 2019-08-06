"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var config = require('./config/database');

var datasource = require('./models/index');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/user');

var authRouter = require('./routes/auth');

var roomRouter = require('./routes/room');

var authorization = require('./config/auth');

var app = express();
app.use(cors());
var port = 3000;
app.set('port', port);
app.config = config;
app.datasource = datasource(app);
app.use(bodyParser.urlencoded({
  urlencoded: false
}));
app.use(bodyParser.json({}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});
var auth = authorization(app);
app.use(auth.initialize());
app.auth = auth;
indexRouter(app);
usersRouter(app);
authRouter(app);
roomRouter(app);
app.listen(app.get('port'), function () {
  console.log("Servidor rodando na porta ".concat(app.get('port')));
});
module.exports = app;