const config = require('./config')
module.exports = {
  [process.env.NODE_ENV || 'development']: config.development,
  dialect: 'postgres',
  params: {
    dialect: 'postgres',
    define: {
      underscored: false
    }
  },
  jwt: {
    secret: 't0p-S3cr3t',
    session: { session: false }
  }

}
