"use strict";
// src/interfaces/Bola.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarBola = criarBola;
function criarBola(cor, circunferencia, material) {
    return {
        trocarCor: (novaCor) => { cor = novaCor; },
        mostrarCor: () => cor,
    };
}
