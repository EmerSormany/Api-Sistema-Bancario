# Api-Sistema-Bancario

Hellow, there.

Esta é a Sormy Banking System. Ela consiste em um sistema bancário com as funcionalidades de **listar todas as contas cadastradas, cadastrar conta, atualizar todos os dados de uma conta, excluir conta, depositar valor, sacar valor, transferir valor, obter extrato e saldo**.

Usei a linguagem Javascript e o freamwork Express.js para Node.js para criar o servidor. Usei também a biblioteca Date-fns para manipulação das datas.

Para baixar e utilizar você precisará ter em sua máquina o *Node.js* e algum programa como *Insomnia* para testar todas as requisições.
Você poderá encontrá-los nos links a seguir: https://nodejs.org/en  e  https://insomnia.rest/download .

Você precisará clonar este repositório utilizando o comando git clone git@github.com:EmerSormany/Api-Sistema-Bancario.git

Após baixados os arquivos você deverá abrir o terminal no diretório ***Api-Sistema-Bancario*** e digitar o comando *npm install* para instalar as bibliotecas utilizadas. 

Após instaladas as bibliotecas e ainda no mesmo diretório você deverá digitar o comando *npm run dev* ou abrir o terminal na pasta ***SRC*** e digitar o comando *node index.js*

Então o sistema estará funcionando e você poderá testar todos os endpoints.


# Os endpoints são: 

http://localhost:3000/contas?senha_banco=Cubos123Bank <br/>
A rota precisa ser com verbo **GET** <br/>
Irá listar todas as contas cadastradas no banco ou agência. Deve ser passado o valor *Cubos123Bank* na query *senha_banco* para que o usuário tenha acesso às contas.

http://localhost:3000/contas <br/>
A rota precisa ser com verbo **POST**  <br/>
Irá cadastrar uma conta no banco ou agência. Deve ser passadas como propriedades no body da requisição os dados da conta como uma **notação de objeto javascript(JSON)**: *nome, cpf, data_nascimento, telefone, email e senha*.

http://localhost:3000/contas/1/usuario <br/>
A rota precisa ser com verbo **PUT**  <br/>
Precisa ser passado como **parâmetro na URL** o número da conta que deseja alterar os dados, entre ***contas/*** e ***/usuario*** <br/>
Irá atualizar todos os dados da conta, excete número da conta e saldo. Deve ser passadas como propriedades no body da requisição os dados da conta como uma **notação de objeto javascript(JSON)**: *nome, cpf, data_nascimento, telefone, email e senha*.

http://localhost:3000/contas/2 <br/>
A rota precisa ser com verbo **DELETE** <br/>
Precisa ser passado como **parâmetro na URL** o número da conta que deseja excluir após ***contas/*** <br/>
Irá deletar uma conta. Possui validação de saldo para poder deletar a conta.

http://localhost:3000/transacoes/depositar <br/>
A rota precisa ser com verbo **POST**  <br/>
Precisa ser passadas como propriedades no body da requisição os dados para depósto como **notação de objeto javascript(JSON)**: *numero_conta* e *valor*.

http://localhost:3000/transacoes/sacar <br/>
A rota precisa ser com verbo **POST**  <br/>
Precisa ser passadas como propriedades no body da requisição os dados para saque como **notação de objeto javascript(JSON)**: *numero_conta*, *valor* e *senha*.

http://localhost:3000/transacoes/transferir <br/>
A rota precisa ser com verbo **POST** <br/>
Precisa ser passadas como propriedades no body da requisição os dados para saque como **notação de objeto javascript(JSON)**: *numero_conta*, *valor*, *senha* e *num_cont_destino*.

http://localhost:3000/contas/extrato?numero_conta=1&senha=12345 <br/>
A rota precisa ser com verbo **GET** <br/>
Deverá ser passados os valores de *numero_conta* e *senha* na query da requisição.

http://localhost:3000/contas/saldo?numero_conta=1&senha=12345 <br/>
A rota precisa ser com verbo **GET** <br/>
Deverá ser passados os valores de *numero_conta* e *senha* na query da requisição.
