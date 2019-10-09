require('dotenv').config()
module.exports = {
  development: {
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: '172.18.0.2', //docker ambiente       
    // host: '10.0.0.9', //producao ambiente      
    //host: 'host.docker.internal',
    //host: 'ec2-107-20-168-237.compute-1.amazonaws.com',
    dialect: 'postgres'
  }
}
