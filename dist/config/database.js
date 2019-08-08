"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = require('./config');

module.exports = (_module$exports = {}, _defineProperty(_module$exports, process.env.NODE_ENV || 'development', config.development), _defineProperty(_module$exports, "dialect", 'postgres'), _defineProperty(_module$exports, "params", {
  dialect: 'postgres',
  define: {
    underscored: false
  }
}), _defineProperty(_module$exports, "jwt", {
  secret: 't0p-S3cr3t',
  session: {
    session: false
  }
}), _module$exports);