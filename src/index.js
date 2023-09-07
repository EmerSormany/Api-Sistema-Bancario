const express = require('express')
const servidor = express()
const rotas = require('./rotas')


servidor.use(express.json())

servidor.use(rotas)


servidor.listen(3000)