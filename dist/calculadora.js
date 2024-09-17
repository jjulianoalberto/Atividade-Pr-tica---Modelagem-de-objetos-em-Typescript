"use strict";
// src/calculadora.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCalculadora = criarCalculadora;
function criarCalculadora() {
    const historico = [];
    const adicionarHistorico = (operacao, resultado) => {
        historico.push({ operacao, resultado });
    };
    return {
        somar: (a, b) => {
            const resultado = a + b;
            adicionarHistorico(`Soma: ${a} + ${b}`, resultado);
            return resultado;
        },
        subtrair: (a, b) => {
            const resultado = a - b;
            adicionarHistorico(`Subtração: ${a} - ${b}`, resultado);
            return resultado;
        },
        multiplicar: (a, b) => {
            const resultado = a * b;
            adicionarHistorico(`Multiplicação: ${a} * ${b}`, resultado);
            return resultado;
        },
        dividir: (a, b) => {
            if (b === 0) {
                throw new Error('Divisão por zero.');
            }
            const resultado = a / b;
            adicionarHistorico(`Divisão: ${a} / ${b}`, resultado);
            return resultado;
        },
        visualizarHistorico: () => historico,
    };
}
