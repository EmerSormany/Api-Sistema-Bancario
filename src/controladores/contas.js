const contas = require('../bancodedados')


const listandoContas = (req, res ) => {
    const lista_contas = contas.contas.filter((conta) => {
        return conta
    })
    return res.status(200).json({lista_contas})
}

const cadastrarConta = (req, res) => {
    const dados_conta = req.body
    const numero = contas.contas.length + 1

    contas.contas.push({
        numero,
        saldo: 0,
        usuario: dados_conta
    })

    return res.status(201).json()

} 

const atualizandoConta = (req, res) => {
    const { numeroConta } = req.params
    const dados_conta = req.body

    let contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    
    if (!contaExistente) {
        return res.status(404).json({mensagem: 'Número de conta informado não existe'})
    }

    const indice = contas.contas.indexOf(contaExistente)
    contas.contas[indice] = {
        numero: Number(numeroConta),
        saldo: contas.contas[indice].saldo,
        usuario: dados_conta
    }
    
    return res.status(201).json()
}

const excluindoConta = (req, res) => {
    const { numeroConta } = req.params

    let contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numeroConta)
    })
    if (!contaExistente) {
        return res.status(404).json({mensagem: 'Número de conta informado não existe'})

    }

    if (contaExistente.saldo !== 0) {
        return res.status(400).json({mensagem: 'A conta só pode ser removida se o saldo for zero!'})
    }

    const indice = contas.contas.indexOf(contaExistente)

    contas.contas.splice(indice , 1)

    return res.status(204).json()
}

const saldo = (req, res) => {
    const { numero_conta } = req.query
    const contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    return res.status(200).json({saldo: contaExistente.saldo})
}

const extrato = (req, res) => {
    const { numero_conta } = req.query

    const saques =  contas.saques.filter((conta) => {
        return conta.numero_conta === numero_conta
    })
    const depositos =  contas.depositos.filter((conta) => {
        return conta.numero_conta === numero_conta
    })
    const transferencias =  contas.transferencias.filter((conta) => {
        return conta.numero_conta === numero_conta
    })

    const extrato = [...saques , ...depositos , ...transferencias]

    extrato.sort((a, b) => {
        return +new Date(a.data) - +new Date(b.data)
    })
    
    return res.status(200).json(extrato)
}

module.exports = {
    listandoContas,
    cadastrarConta,
    atualizandoConta,
    excluindoConta,
    extrato, 
    saldo
}