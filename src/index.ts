import { criarContador } from './contador';
import { criarBola } from './bola';
import { criarContaCorrente } from './contaCorrente';
import { criarCalculadora } from './calculadora'; 
import { criarBombaCombustivel } from './bombaCombustivel';
import { criarCarro } from './carro';

// Testando Contador
const contador = criarContador();
contador.incrementar();
console.log(`Contador: ${contador.obterValor()}`); 
contador.zerar();
console.log(`Contador após zerar: ${contador.obterValor()}`);

// Testando Bola
const bola = criarBola('vermelha', 30, 'borracha');
console.log(`Cor da bola: ${bola.mostrarCor()}`); 
bola.trocarCor('azul');
console.log(`Nova cor da bola: ${bola.mostrarCor()}`); 

// Testando ContaCorrente
const conta = criarContaCorrente('12345', 'Juliano', 5000);
conta.deposito(200);
console.log(`Saldo após depósito: ${conta.obterSaldo()}`); 
conta.saque(100);
console.log(`Saldo após saque: ${conta.obterSaldo()}`); 

// Testando Calculadora
const calculadora = criarCalculadora();
console.log(calculadora.somar(5, 3));
console.log(calculadora.visualizarHistorico());

// Testando BombaCombustivel
const bomba = criarBombaCombustivel('gasolina', 5, 100);
bomba.abastecerPorLitro(10);
bomba.abastecerPorValor(20);
console.log(`Quantidade restante: ${bomba.obterQuantidadeCombustivel()}`);

// Testando Carro
const carro = criarCarro(15);
carro.adicionarGasolina(50);
carro.andar(150);
console.log(`Combustível restante: ${carro.obterGasolina()} litros`);
