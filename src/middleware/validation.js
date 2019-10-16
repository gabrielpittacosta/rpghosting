const { validationResult  } = require('express-validator/check');
const { regrasDeValidacaoCreateUser } = require('../validations/UserValidacao');
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(400).json({ erros: extractedErrors, });
}
module.exports =  {
  regrasDeValidacaoCreateUser,
  validate,
}