"use strict";
// src/interfaces/ContaCorrente.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarContaCorrente = criarContaCorrente;
function criarContaCorrente(numeroConta, nomeCorrentista, saldo = 0) {
    let saldoAtual = saldo;
    return {
        alterarNome: (novoNome) => { nomeCorrentista = novoNome; },
        deposito: (valor) => {
            if (valor <= 0) {
                throw new Error('O valor do depósito deve ser positivo.');
            }
            saldoAtual += valor;
        },
        saque: (valor) => {
            if (valor <= 0) {
                throw new Error('O valor do saque deve ser positivo.');
            }
            if (valor > saldoAtual) {
                throw new Error('Saldo insuficiente.');
            }
            saldoAtual -= valor;
        },
        obterSaldo: () => saldoAtual,
    };
}
