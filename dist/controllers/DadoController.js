"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDado = getDado;
exports.rollDados = rollDados;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var models = require('../models/index');

function getDado(_x, _x2) {
  return _getDado.apply(this, arguments);
}

function _getDado() {
  _getDado = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var dados;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return models.Dado.findAll({});

          case 3:
            dados = _context.sent;
            res.json({
              data: dados
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            res.json({
              message: 'Ocorreu um erro'
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getDado.apply(this, arguments);
}

function rollDados(_x3, _x4) {
  return _rollDados.apply(this, arguments);
}

function _rollDados() {
  _rollDados = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var numDeDado, tipoDado, rollDice, listaResultado, soma, critico, negativo, dado, lado, testando, testandoDois, resultado;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rollDice = function _ref() {
              return Math.floor(Math.random() * tipoDado + 1);
            };

            numDeDado = req.body.numDeDado;
            tipoDado = req.body.tipoDado;
            listaResultado = [];
            soma = 0;
            critico = 0;
            negativo = 0;
            dado = 0;
            lado = 0;

            if (tipoDado === 20) {
              for (dado = 0; dado < numDeDado; dado++) {
                lado = rollDice();
                soma = soma + lado;

                if (lado === tipoDado) {
                  testando = 'Crítico';
                  critico = critico + 1;
                  listaResultado.push(lado, testando);
                  console.log(listaResultado);
                } else if (lado === 1) {
                  negativo = negativo + 1;
                  testandoDois = 'Crítico Negativo se fudeu';
                  listaResultado.push(lado, testandoDois);
                  console.log(listaResultado);
                } else {
                  listaResultado.push(lado);
                  console.log(listaResultado);
                }
              }
            } else if (tipoDado === 4 || tipoDado === 6 || tipoDado === 8 || tipoDado === 10) {
              for (dado = 0; dado < numDeDado; dado++) {
                lado = rollDice();
                soma = soma + lado;
                listaResultado.push(lado);
                console.log(listaResultado);
              }
            }

            resultado = critico - negativo;
            res.json({
              quantidadeDados: numDeDado,
              valor: [{
                valores: listaResultado
              }],
              totalDaRolgame: soma,
              resultadoDosCriticos: resultado
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _rollDados.apply(this, arguments);
}