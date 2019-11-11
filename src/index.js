const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const PORT = process.env.PORT || 8000;
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressValidator());
app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log('Servidor rodando http://:8000...');
});
module.exports = app;