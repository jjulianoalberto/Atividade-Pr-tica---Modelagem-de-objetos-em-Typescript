"use strict";
// src/carro.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCarro = criarCarro;
// Função que cria um objeto que implementa a interface ICarro
function criarCarro(consumo) {
    let combustivel = 0;
    return {
        adicionarGasolina: (litros) => {
            if (litros <= 0) {
                throw new Error('A quantidade de gasolina deve ser positiva.');
            }
            combustivel += litros;
        },
        andar: (distancia) => {
            const litrosNecessarios = distancia / consumo;
            if (litrosNecessarios > combustivel) {
                throw new Error('Combustível insuficiente para a distância informada.');
            }
            combustivel -= litrosNecessarios;
        },
        obterGasolina: () => combustivel,
    };
}
