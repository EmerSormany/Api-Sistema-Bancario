
const { Router } = require('express')
const rotas = Router()
const contas = require('./controladores/contas')
const transacoes = require('./controladores/transacoes')
const verificadores = require('./intermediarios/validadoresContas')
const validadoresTransacoes = require('./intermediarios/validadoresTransacoes')


rotas.get('/contas', verificadores.autenticandoBanco,  contas.listandoContas)
rotas.post('/contas', verificadores.validando_email_cpf, verificadores.dadosPreenchidos , contas.cadastrarConta)
rotas.put('/contas/:numeroConta/usuario', verificadores.validando_email_cpf, verificadores.dadosPreenchidos, contas.atualizandoConta )
rotas.delete('/contas/:numeroConta', contas.excluindoConta)
rotas.get('/contas/saldo' , verificadores.senha_contas , contas.saldo  )
rotas.get('/contas/extrato' ,  verificadores.senha_contas , contas.extrato)
rotas.post('/transacoes/depositar', validadoresTransacoes.numero_e_valor, transacoes.depositar)
rotas.post('/transacoes/sacar', validadoresTransacoes.numero_e_valor, validadoresTransacoes.senha , transacoes.sacar)
rotas.post('/transacoes/transferir', validadoresTransacoes.numero_e_valor , validadoresTransacoes.senha , transacoes.transferir )


module.exports = rotas