export interface IBola {
    trocarCor(novaCor: string): void;
    mostrarCor(): string;
  }
  
  export function criarBola(cor: string, circunferencia: number, material: string): IBola {
    return {
      trocarCor: (novaCor: string) => { cor = novaCor; },
      mostrarCor: () => cor,
    };
  }
  