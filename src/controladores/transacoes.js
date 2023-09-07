
const contas = require('../bancodedados')
const { ptBR } = require('date-fns/locale')
const { format } = require('date-fns')

const depositar = (req, res) => {
    const { numero_conta , valor } = req.body

    let data = new Date()

    const conta = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    const indice = contas.contas.indexOf(conta)

    contas.contas[indice].saldo += Number(valor)
    contas.depositos.push({
        tipo_de_transacao: 'Depósito',
        data: format(data, "yyyy'-'MM'-'dd HH':'mm':'ss" , {locale: ptBR}),
        numero_conta,
        valor
    })

    return res.status(201).json()
}

const sacar = (req, res) => {
    const { numero_conta , valor } = req.body

    const contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (contaExistente.saldo < Number(valor)) {
        return res.status(400).json({mensagem: 'Saldo insuficiente'})
    }
    const indice = contas.contas.indexOf(contaExistente)
    contas.contas[indice].saldo -= Number(valor)

    let data = new Date()

    contas.saques.push({
        tipo_de_transacao: 'Saque',
        data: format(data, "yyyy'-'MM'-'dd HH':'mm':'ss" , {locale: ptBR}),
        numero_conta,
        valor
    })

    return res.status(201).json()
}

const transferir = (req, res) => {
    const { numero_conta , valor , num_cont_destino } = req.body
    
    const cont_destino = contas.contas.find((conta) => {
        return conta.numero === Number(num_cont_destino)
    })
    const cont_origem = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (cont_origem.saldo < valor) {
        return res.status(400).json({mensagem: 'Saldo insuficiente!'})
    }

    if (!cont_destino) {
        return res.status(404).json({mensagem: 'Conta destino inexistente'})
    }
    const i_C_Origem = contas.contas.indexOf(cont_origem)
    contas.contas[i_C_Origem].saldo -= Number(valor)

    const i_C_Destino = contas.contas.indexOf(cont_destino)
    contas.contas[i_C_Destino].saldo += Number(valor)

    let data = new Date()

    contas.transferencias.push({
        tipo_de_transacao: 'Transferência Enviada',
        data: format(data, "yyyy'-'MM'-'dd HH':'mm':'ss" , {locale: ptBR}),
        numero_conta,
        num_cont_destino,
        valor
    })

    contas.transferencias.push({
        tipo_de_transacao: 'Transferência Recebida',
        data: format(data, "yyyy'-'MM'-'dd HH':'mm':'ss" , {locale: ptBR}),
        numero_conta: num_cont_destino,
        num_cont_origem: numero_conta,
        valor
    })

    return res.status(201).json('Trasnferência realizada com sucesso!')

}

module.exports = {
    depositar,
    sacar,
    transferir
}