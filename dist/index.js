"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const contador_1 = require("./contador");
const bola_1 = require("./bola");
const contaCorrente_1 = require("./contaCorrente");
const calculadora_1 = require("./calculadora"); // Certifique-se de que o caminho está correto
const bombaCombustivel_1 = require("./bombaCombustivel");
const carro_1 = require("./carro");
// Testando Contador
const contador = (0, contador_1.criarContador)();
contador.incrementar();
console.log(`Contador: ${contador.obterValor()}`); // 1
contador.zerar();
console.log(`Contador após zerar: ${contador.obterValor()}`); // 0
// Testando Bola
const bola = (0, bola_1.criarBola)('vermelha', 30, 'borracha');
console.log(`Cor da bola: ${bola.mostrarCor()}`); // vermelha
bola.trocarCor('azul');
console.log(`Nova cor da bola: ${bola.mostrarCor()}`); // azul
// Testando ContaCorrente
const conta = (0, contaCorrente_1.criarContaCorrente)('12345', 'Juliano', 5000);
conta.deposito(200);
console.log(`Saldo após depósito: ${conta.obterSaldo()}`); // 700
conta.saque(100);
console.log(`Saldo após saque: ${conta.obterSaldo()}`); // 600
// Testando Calculadora
const calculadora = (0, calculadora_1.criarCalculadora)();
console.log(calculadora.somar(5, 3)); // 8
console.log(calculadora.visualizarHistorico());
// Testando BombaCombustivel
const bomba = (0, bombaCombustivel_1.criarBombaCombustivel)('gasolina', 5, 100);
bomba.abastecerPorLitro(10);
bomba.abastecerPorValor(20);
console.log(`Quantidade restante: ${bomba.obterQuantidadeCombustivel()}`); // Ajuste de acordo com os métodos
// Testando Carro
const carro = (0, carro_1.criarCarro)(15);
carro.adicionarGasolina(50);
carro.andar(150);
console.log(`Combustível restante: ${carro.obterGasolina()} litros`);
