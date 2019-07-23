const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./config/database')
const datasource = require('./models/index')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/user')
const authRouter = require('./routes/auth')

const authorization = require('./config/auth')

const app = express()
app.use(cors())

const port = 3000
app.set('port', port)

app.config = config
app.datasource = datasource(app)

app.use(bodyParser.json({
  limit: '5mb'
}))

const auth = authorization(app)
app.use(auth.initialize())
app.auth = auth

indexRouter(app)
usersRouter(app)
authRouter(app)

app.listen(app.get('port'), () => {
  console.log(`Servidor rodando na porta ${app.get('port')}`)
})

module.exports = app
