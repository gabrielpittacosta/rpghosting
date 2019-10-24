import { sanitizeBody } from 'express-validator/filter';

const { check } = require('express-validator/check')
const models = require('../models/index')

const regrasDeValidacaoEnterRoom = () => {
  return [
    check('name')
      .custom((jogadores)=>{
        const usernameDentroDaSala = jogadores.username
        usernameDentroDaSala.find(function(userjois) {
            if(userjois === username){
                console.log('opa');
                return true;
            }else{
                return false
            }
        })
      }).withMessage('Campo username já existe'),


    sanitizeBody('*')
      .trim()
      .escape(),
  ]
}

module.exports = {
    regrasDeValidacaoEnterRoom
  }