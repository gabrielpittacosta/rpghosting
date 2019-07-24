const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./config/database')
const datasource = require('./models/index')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const roomRouter = require('./routes/room')

const authorization = require('./config/auth')

const app = express()
app.use(cors())

const port = 3000
app.set('port', port)

app.config = config
app.datasource = datasource(app)

app.use(bodyParser.urlencoded({ urlencoded: false }))
app.use(bodyParser.json({}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

const auth = authorization(app)
app.use(auth.initialize())
app.auth = auth

indexRouter(app)
usersRouter(app)
authRouter(app)
roomRouter(app)

app.listen(app.get('port'), () => {
  console.log(`Servidor rodando na porta ${app.get('port')}`)
})

module.exports = app
