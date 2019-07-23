"use strict";

module.exports = {
  database: 'rpgprojeto',
  username: 'gabrielpitta',
  password: '123456',
  params: {
    dialect: 'postgres',
    define: {
      underscored: false
    }
  },
  jwt: {
    secret: 't0p-S3cr3t',
    session: {
      session: false
    }
  }
};