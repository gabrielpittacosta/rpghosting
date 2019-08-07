"use strict";

module.exports = {
  database: 'rpgprojeto',
  username: 'postgres',
  password: '123456',
  dialect: 'postgres',
<<<<<<< HEAD
  host: '127.0.0.1',
=======
>>>>>>> cf52fa1e0650609d8f56f805ba97bb343218d316
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