const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

app.use(methodOverride('X-HTTP-Method'))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./routes'))

const server = app.listen(8000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('Servidor rodando http://%s:%s', host, port)
})
module.exports = app
