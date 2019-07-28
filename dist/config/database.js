"use strict";

module.exports = {
  database: 'rpgprojeto',
  username: 'postgres',
  password: '123456',
  dialect: 'postgres',
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