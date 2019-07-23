"use strict";

var app = require('index');

app.listen(app.get('port'), function () {
  console.log("Servidor rodando na porta ".concat(app.get('port')));
});