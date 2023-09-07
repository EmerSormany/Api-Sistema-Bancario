const contas = require('../bancodedados')

const autenticandoBanco = (req, res, next) => {
    const { senha_banco } = req.query
    if (senha_banco !== contas.banco.senha) {
        return res.status(401).json({mensagem: "A senha do banco informada é inválida!"})
    }
    next()
}


const validando_email_cpf = (req, res, next) => {
    const {cpf , email} = req.body

    const arroba = email.includes('@')
    const pontoCom = email.includes('.com')

    if (!arroba || !pontoCom) {
        return res.status(400).json({mensagem: "O email informado é inválido!"})
    }

    let tamanhoCPF = cpf.split(' ')
    tamanhoCPF = tamanhoCPF.join('')

    if (tamanhoCPF.length != 11) {
        return res.status(400).json({mensagem: "O cpf informado é inválido!"})
    }
    next()
}

const dadosPreenchidos = (req, res, next) => {
    const {nome , cpf , data_nascimento , telefone , email , senha} = req.body

    const cpfRepetido = contas.contas.find((conta) => {
        return conta.usuario.cpf === cpf
    })

    const emailRepetido = contas.contas.find((conta) => {
        return conta.usuario.email === email
    })
    if ( cpfRepetido || emailRepetido ) {
        return res.status(400).json({mensagem: "Já existe uma conta com o cpf ou e-mail informado!"})
    }

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({mensagem: "Algum dado não foi preenchido"})
    }
    next()
}

const senha_contas = (req, res, next) => {
    const {senha , numero_conta} = req.query

    const contaExistente = contas.contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    })
    if (!contaExistente) {
        return res.status(404).json({mensagem: 'Número de conta informado não existe'})
    }
    if (contaExistente.usuario.senha !== senha) {
        return res.status(403).json({mensagem: 'Credenciais inválidas'})
    }
    next()
}


module.exports = {
    autenticandoBanco,
    dadosPreenchidos,
    validando_email_cpf,
    senha_contas
}