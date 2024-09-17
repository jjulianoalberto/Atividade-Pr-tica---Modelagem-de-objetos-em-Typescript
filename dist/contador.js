"use strict";
// src/interfaces/Contador.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarContador = criarContador;
function criarContador() {
    let valor = 0;
    return {
        zerar: () => { valor = 0; },
        incrementar: () => { valor++; },
        obterValor: () => valor,
    };
}
