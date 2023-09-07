const contas = require('../bancodedados')

const numero_e_valor = (req, res, next) => {
    const { numero_conta , valor } = req.body

    if (!numero_conta || !valor) {
        return res.status(404).json({mensagem: 'O número da conta e o valor são obrigatórios!'})
    }

    if (Number(valor) <= 0) {
        return res.status(400).json({mensagem: 'Valor incorreto'})
    }

    const contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })

    if (!contaExistente) {
        return res.status(404).json({mensagem: 'Conta inexistente'})
    }

    next()
} 

const senha = (req, res, next) => {
    const { numero_conta , senha } = req.body
    const contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (contaExistente.usuario.senha !== senha) {
        return res.status(403).json({mensagem: 'Credenciais inválidas'})
    }
    next()
}

module.exports = {
    numero_e_valor,
    senha
}