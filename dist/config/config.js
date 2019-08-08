"use strict";

require('dotenv').config();

module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'host.docker.internal',
    dialect: 'postgres'
  }
};