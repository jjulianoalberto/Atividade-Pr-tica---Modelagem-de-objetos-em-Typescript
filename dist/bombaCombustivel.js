"use strict";
// src/interfaces/BombaCombustivel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarBombaCombustivel = criarBombaCombustivel;
function criarBombaCombustivel(tipoCombustivel, valorLitro, quantidadeCombustivel) {
    return {
        abastecerPorValor: (valor) => {
            const litros = valor / valorLitro;
            if (litros > quantidadeCombustivel) {
                throw new Error('Quantidade de combustível insuficiente.');
            }
            quantidadeCombustivel -= litros;
            console.log(`Foram abastecidos ${litros.toFixed(2)} litros.`);
        },
        abastecerPorLitro: (litros) => {
            if (litros > quantidadeCombustivel) {
                throw new Error('Quantidade de combustível insuficiente.');
            }
            const valor = litros * valorLitro;
            quantidadeCombustivel -= litros;
            console.log(`O valor a ser pago é R$ ${valor.toFixed(2)}.`);
        },
        alterarValor: (novoValor) => { valorLitro = novoValor; },
        alterarCombustivel: (novoTipo) => { tipoCombustivel = novoTipo; },
        alterarQuantidadeCombustivel: (novaQuantidade) => { quantidadeCombustivel = novaQuantidade; },
        obterQuantidadeCombustivel: () => quantidadeCombustivel,
    };
}
