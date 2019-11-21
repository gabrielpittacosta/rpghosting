const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const axios = require('axios');
const PORT = process.env.PORT || 8000;
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);

const models = require('../src/models/index')

const getApiAndEmit = async socket => {
  try { 
    const res = await axios.get(
      "http://192.168.15.8:3000/"
    );
    socket.emit("FromAPI");
  } catch (error) {
    console.log(error);
  }
}
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(expressValidator());
app.use('/', require('./routes'));
let interval;
io.on("connection", socket => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 99999);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
server.listen(PORT, () => {
  console.log('Servidor rodando http://:8000...');
});
module.exports = app;