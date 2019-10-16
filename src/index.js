const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const PORT = process.env.PORT || 8000;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const app = express();
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(expressValidator());
app.use(function(req, res, next) {
  req.io = io;
  next();
});
app.use('/', require('./routes'));
app.listen(PORT, () => {
  console.log('Servidor rodando http://:8000...');
});
module.exports = app;