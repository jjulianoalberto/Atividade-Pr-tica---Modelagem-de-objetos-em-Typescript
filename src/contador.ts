export interface IContador {
    zerar(): void;
    incrementar(): void;
    obterValor(): number;
  }
  
  export function criarContador(): IContador {
    let valor = 0;
  
    return {
      zerar: () => { valor = 0; },
      incrementar: () => { valor++; },
      obterValor: () => valor,
    };
  }
  