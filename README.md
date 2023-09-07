# Api-Sistema-Bancario
<img src="/imagens/Sormy Banking System.png">


Hellow, there.

Esta é a Sormy Banking System. Ela consiste em um sistema bancário com as funcionalidades de **listar todas as contas cadastradas, cadastrar conta, atualizar todos os dados de uma conta, excluir conta, depositar valor, sacar valor, transferir valor, obter extrato e saldo**.

### Tecnologias utilizadas no projeto:
 *  Linguagem Javascript;
 *  Express.js  > criar o servidor;
 *  Node.js;
 *  Biblioteca Date-fns > manipulação das datas.

### Como baixar e rodar o projeto:
 * Para baixar e utilizar você precisará ter em sua máquina o *Node.js* e algum programa como *Insomnia* para testar todas as requisições.
 * Você poderá encontrá-los nos links a seguir: [Node.js](https://nodejs.org/en)  e  [Insomnia](https://insomnia.rest/download).
 * Você precisará clonar este repositório utilizando o comando: **git clone git@github.com:EmerSormany/Api-Sistema-Bancario.git**
 * Após baixados os arquivos você deverá abrir o terminal no diretório ***Api-Sistema-Bancario*** e digitar o comando *npm install* para instalar as bibliotecas utilizadas. 
 * Após instaladas as bibliotecas e ainda no mesmo diretório você deverá digitar o comando *npm run dev* no terminal ou abrir o terminal na pasta ***SRC*** e digitar o comando *node index.js*

Então o sistema estará funcionando e você poderá testar todos os endpoints.


# Os endpoints são: 
#### 1. Listar Contas
 http://localhost:3000/contas?senha_banco=Cubos123Bank <br/>
A rota precisa ser com verbo **GET** <br/>
Irá listar todas as contas cadastradas no banco ou agência. Deve ser passado o valor *Cubos123Bank* na query *senha_banco* para que o usuário tenha acesso às contas. <br/>

<img src="/imagens/lista_de_contas.png">

#### 2. Cadastrar Conta
http://localhost:3000/contas <br/>
A rota precisa ser com verbo **POST**  <br/>
Irá cadastrar uma conta no banco ou agência. <br/>
Deve ser passadas como propriedades no body da requisição os dados da conta como uma **notação de objeto javascript(JSON)**: *nome, cpf, data_nascimento, telefone, email e senha*. 

<img src="/imagens/requisicao_e_resposta_cadastrar conta.png">

#### 3. Atualizar Conta

http://localhost:3000/contas/1/usuario <br/>
A rota precisa ser com verbo **PUT**  <br/>
Irá atualizar todos os dados da conta, excete número da conta e saldo. Deve ser passadas como propriedades no body da requisição os dados da conta como uma **notação de objeto javascript(JSON)**: *nome, cpf, data_nascimento, telefone, email e senha*. <br/>
Precisa ser passado como **parâmetro na URL** o número da conta que deseja alterar os dados, entre ***contas/*** e ***/usuario*** <br/>

<img src="/imagens/requisicao_e_resposta_atualizar conta.png">

#### 4. Excluir Conta

http://localhost:3000/contas/1 <br/>
A rota precisa ser com verbo **DELETE** <br/>
Irá excluir uma conta. Possui validação de saldo para poder deletar a conta. <br/>
Precisa ser passado como **parâmetro na URL** o número da conta que deseja excluir após ***contas/*** <br/>

<img src="/imagens/excluir_conta.png">

#### 5. Realizar Depósito

http://localhost:3000/transacoes/depositar <br/>
A rota precisa ser com verbo **POST**  <br/>
Irá realizar o depósito de algum valor. <br/>
Precisa ser passadas como propriedades no body da requisição os dados para depósto como **notação de objeto javascript(JSON)**: *numero_conta* e *valor*. <br/>

<img src="/imagens/deposito.png">

#### 6. Realizar Saque

http://localhost:3000/transacoes/sacar <br/>
A rota precisa ser com verbo **POST**  <br/>
Irá realizar o saque e algum valor. <br/>
Precisa ser passadas como propriedades no body da requisição os dados para saque como **notação de objeto javascript(JSON)**: *numero_conta*, *valor* e *senha*. <br/>

<img src="/imagens/saque.png">

#### 6. Realizar Transferência

http://localhost:3000/transacoes/transferir <br/>
A rota precisa ser com verbo **POST**. <br/>
Irá transferir algum valor.<br/>
Precisa ser passadas como propriedades no body da requisição os dados para saque como **notação de objeto javascript(JSON)**: *numero_conta*, *valor*, *senha* e *num_cont_destino*. <br/>

<img src="/imagens/trasferencia.png">

#### 6. Obter Saldo De Uma Conta
http://localhost:3000/contas/extrato?numero_conta=1&senha=12345 <br/>
A rota precisa ser com verbo **GET**. <br/>
Irá mostrar o extrato da conta. <br/>
Deverá ser passados os valores de *numero_conta* e *senha* na query da requisição. <br/>

<img src="/imagens/extrato.png">

#### 6. Obter Extrato De Uma Conta
http://localhost:3000/contas/saldo?numero_conta=1&senha=12345 <br/>
A rota precisa ser com verbo **GET**.  <br/>
Irá mostrar o saldo da conta. <br/>
Deverá ser passados os valores de *numero_conta* e *senha* na query da requisição. <br/>
<img src="/imagens/saldo.png">


# Próximas Implementações
 * Realizar atualização parcial do dados de uma conta;
 * Melhorar validações nas rotas;
 * Exibir contas por usuário;

Ainda estou trabalhando no projeto, então novas atualizações virão conforme as ideias surgirem. :thought_balloon:
Obrigado por sua atenção. :cowboy_hat_face:
