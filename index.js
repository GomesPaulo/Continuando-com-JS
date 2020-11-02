import {Cliente} from "./Cliente.js"
// import {ContaCorrente} from "./Conta/ContaCorrente.js"
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
// import {ContaSalario} from "./Conta/ContaSalario.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente = new Cliente("Ana", 45612312301, "789")
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345698701);
diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("1234");

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteLogado = SistemaAutenticacao.login(cliente, "789");

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);






























// const cliente1 = new Cliente("João", 12345678912); //João//cliente1.rg = 121234565;
// const ContaCorrenteJoao = new ContaCorrente(cliente1, 1001); //João
// const contaPoupancaJoao = new ContaPoupanca(50, cliente1, 1001);

// const cliente2 = new Cliente("Maria", 9898798765); //Maria //cliente2.rg = 989876549;
// const ContaCorrenteMaria = new ContaCorrente(cliente2, 1001); //Maria

// const cliente3 = new Cliente("Alice", 88822233309);
// const ContaCorrenteAlice = new ContaCorrente(cliente3, 102); //Alice


// ContaCorrenteJoao.depositar(200);
// const saque = ContaCorrenteJoao.sacar(50);
// console.log("João fez o saque de " + saque);
// console.log("Saldo do João: " + ContaCorrenteJoao._saldo);
// ContaCorrenteJoao.transferir(20, ContaCorrenteMaria);
// contaPoupancaJoao(_saldoInicial);

// console.log("Saldo João após transferência: " + ContaCorrenteJoao._saldo);
// console.log("Saldo da Maria: " + ContaCorrenteMaria._saldo);

// ContaCorrenteJoao.transferir(10, ContaCorrenteAlice);

// console.log(ContaCorrenteAlice.saldo);

// console.log("Total de contas criadas: " + ContaCorrente.numeroDeContas);
