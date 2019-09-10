require('dotenv').config()
module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: '172.18.0.2', //docker ambiente        \///NÃO MEXER\\\/
    //host: '10.0.0.9', //producao ambiente      \///NÃO MEXER\\\/
    dialect: 'postgres'
  }
}
