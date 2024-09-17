export interface ICarro {
    adicionarGasolina(litros: number): void;
    andar(distancia: number): void;
    obterGasolina(): number;
  }
  
   export function criarCarro(consumo: number): ICarro {
    let combustivel = 0;
  
    return {
      adicionarGasolina: (litros: number) => {
        if (litros <= 0) {
          throw new Error('A quantidade de gasolina deve ser positiva.');
        }
        combustivel += litros;
      },
      andar: (distancia: number) => {
        const litrosNecessarios = distancia / consumo;
        if (litrosNecessarios > combustivel) {
          throw new Error('Combustível insuficiente para a distância informada.');
        }
        combustivel -= litrosNecessarios;
      },
      obterGasolina: () => combustivel,
    };
  }
  