"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFichas = getFichas;
exports.getOneFicha = getOneFicha;
exports.createFicha = createFicha;
exports.deleteFicha = deleteFicha;
exports.updateFicha = updateFicha;
exports.validarFicha = validarFicha;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var models = require('../models/index');

function getFichas(_x, _x2) {
  return _getFichas.apply(this, arguments);
}

function _getFichas() {
  _getFichas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var fichas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return models.Ficha.findAll();

          case 3:
            fichas = _context.sent;
            res.status(201).json({
              data: fichas
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('Erro ao insirir no banco ' + _context.t0);
            res.status(500).send(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getFichas.apply(this, arguments);
}

function getOneFicha(_x3, _x4) {
  return _getOneFicha.apply(this, arguments);
}

function _getOneFicha() {
  _getOneFicha = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, ficha;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return models.Ficha.findOne({
              where: {
                id: id
              }
            });

          case 4:
            ficha = _context2.sent;
            res.status(201).json({
              data: ficha
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log('Erro ao insirir no banco ' + _context2.t0);
            res.status(500).send(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneFicha.apply(this, arguments);
}

function createFicha(_x5, _x6) {
  return _createFicha.apply(this, arguments);
}

function _createFicha() {
  _createFicha = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var erros, _req$body, nomeJogador, nomePersonagem, userId, roomId, newFicha;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            req.assert("nameJogador", "Campo nome do jogador de jogadores é obrigatório ").notEmpty();
            req.assert("nomePersonagem", "Campo nome do personagem é obrigatório ").notEmpty();
            erros = req.validationErrors();

            if (erros) {
              console.log('Erros de validação foram encontrados');
              res.status(400).send(erros);
            }

            _req$body = req.body, nomeJogador = _req$body.nomeJogador, nomePersonagem = _req$body.nomePersonagem, userId = _req$body.userId, roomId = _req$body.roomId;
            _context3.next = 8;
            return models.Ficha.create({
              nomeJogador: nomeJogador,
              nomePersonagem: nomePersonagem,
              userId: userId,
              roomId: roomId
            }, {
              fields: ['nomeJogador', 'nomePersonagem', 'userId', 'roomId']
            });

          case 8:
            newFicha = _context3.sent;

            if (!newFicha) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: 'Ficha criada com sucesso',
              data: newFicha
            }));

          case 11:
            _context3.next = 17;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.log('Erro ao insirir no banco ' + _context3.t0);
            res.status(500).send(_context3.t0);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return _createFicha.apply(this, arguments);
}

function deleteFicha(_x7, _x8) {
  return _deleteFicha.apply(this, arguments);
}

function _deleteFicha() {
  _deleteFicha = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deletRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return models.Ficha.destroy({
              where: {
                id: id
              }
            });

          case 4:
            deletRowCount = _context4.sent;
            res.status(201).json({
              message: 'Ficha deletada com sucesso',
              count: deletRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log('Erro ao insirir no banco ' + _context4.t0);
            res.status(500).send(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteFicha.apply(this, arguments);
}

function updateFicha(_x9, _x10) {
  return _updateFicha.apply(this, arguments);
}

function _updateFicha() {
  _updateFicha = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nomeJogador, nomePersonagem, classe, nivel, raca, antecedente, tendencia, pontosXp, inspiracao, bonusProeficiencia, testesResistencia, pericias, sabedoriaPassivaPercepcao, idiomasEProfeciencias, classeArmadura, pontosVidaAtual, pontosVidaTemporario, dadosDeVida, testesContraAMorte, ataquesEMagia, equipamentos, caracteristicasEHabilidades, tracosDePersonalidade, ideias, ligacoes, defeitos, fichas;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, nomeJogador = _req$body2.nomeJogador, nomePersonagem = _req$body2.nomePersonagem, classe = _req$body2.classe, nivel = _req$body2.nivel, raca = _req$body2.raca, antecedente = _req$body2.antecedente, tendencia = _req$body2.tendencia, pontosXp = _req$body2.pontosXp, inspiracao = _req$body2.inspiracao, bonusProeficiencia = _req$body2.bonusProeficiencia, testesResistencia = _req$body2.testesResistencia, pericias = _req$body2.pericias, sabedoriaPassivaPercepcao = _req$body2.sabedoriaPassivaPercepcao, idiomasEProfeciencias = _req$body2.idiomasEProfeciencias, classeArmadura = _req$body2.classeArmadura, pontosVidaAtual = _req$body2.pontosVidaAtual, pontosVidaTemporario = _req$body2.pontosVidaTemporario, dadosDeVida = _req$body2.dadosDeVida, testesContraAMorte = _req$body2.testesContraAMorte, ataquesEMagia = _req$body2.ataquesEMagia, equipamentos = _req$body2.equipamentos, caracteristicasEHabilidades = _req$body2.caracteristicasEHabilidades, tracosDePersonalidade = _req$body2.tracosDePersonalidade, ideias = _req$body2.ideias, ligacoes = _req$body2.ligacoes, defeitos = _req$body2.defeitos;
            _context6.next = 5;
            return models.Ficha.findAll({
              individualHooks: true,
              attributes: ['id', 'nomeJogador', 'nomePersonagem', 'classe', 'nivel', 'raca', 'antecedente', 'tendencia', 'pontosXp', 'inspiracao', 'bonusProeficiencia', 'testesResistencia', 'pericias', 'sabedoriaPassivaPercepcao', 'idiomasEProfeciencias', 'classeArmadura', 'pontosVidaAtual', 'pontosVidaTemporario', 'dadosDeVida', 'testesContraAMorte', 'ataquesEMagia', 'equipamentos', 'caracteristicasEHabilidades', 'tracosDePersonalidade', 'ideias', 'ligacoes', 'defeitos'],
              whrere: {
                id: id
              }
            });

          case 5:
            fichas = _context6.sent;

            if (fichas.length > 0) {
              fichas.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(ficha) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return ficha.update({
                            nomeJogador: nomeJogador,
                            nomePersonagem: nomePersonagem,
                            classe: classe,
                            nivel: nivel,
                            raca: raca,
                            antecedente: antecedente,
                            tendencia: tendencia,
                            pontosXp: pontosXp,
                            inspiracao: inspiracao,
                            bonusProeficiencia: bonusProeficiencia,
                            testesResistencia: testesResistencia,
                            pericias: pericias,
                            sabedoriaPassivaPercepcao: sabedoriaPassivaPercepcao,
                            idiomasEProfeciencias: idiomasEProfeciencias,
                            classeArmadura: classeArmadura,
                            pontosVidaAtual: pontosVidaAtual,
                            pontosVidaTemporario: pontosVidaTemporario,
                            dadosDeVida: dadosDeVida,
                            testesContraAMorte: testesContraAMorte,
                            ataquesEMagia: ataquesEMagia,
                            equipamentos: equipamentos,
                            caracteristicasEHabilidades: caracteristicasEHabilidades,
                            tracosDePersonalidade: tracosDePersonalidade,
                            ideias: ideias,
                            ligacoes: ligacoes,
                            defeitos: defeitos
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x14) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.status(201).json({
              message: 'Sala atualizada',
              data: fichas
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log('Erro ao insirir no banco ' + _context6.t0);
            res.status(500).send(_context6.t0);

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _updateFicha.apply(this, arguments);
}

function validarFicha(_x11, _x12, _x13) {
  return _validarFicha.apply(this, arguments);
}

function _validarFicha() {
  _validarFicha = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res, next) {
    var id;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            try {
              id = req.params.id;
            } catch (erro) {
              console.log('Erro ao insirir no banco ' + erro);
              res.status(500).send(erro);
            }

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _validarFicha.apply(this, arguments);
}