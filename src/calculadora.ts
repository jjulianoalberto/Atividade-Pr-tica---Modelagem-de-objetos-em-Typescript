export interface ICalculadora {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
    visualizarHistorico(): { operacao: string; resultado: number }[];
}

export function criarCalculadora(): ICalculadora {
    const historico: { operacao: string; resultado: number }[] = [];

    const adicionarHistorico = (operacao: string, resultado: number) => {
        historico.push({ operacao, resultado });
    };

    return {
        somar: (a: number, b: number) => {
            const resultado = a + b;
            adicionarHistorico(`Soma: ${a} + ${b}`, resultado);
            return resultado;
        },
        subtrair: (a: number, b: number) => {
            const resultado = a - b;
            adicionarHistorico(`Subtração: ${a} - ${b}`, resultado);
            return resultado;
        },
        multiplicar: (a: number, b: number) => {
            const resultado = a * b;
            adicionarHistorico(`Multiplicação: ${a} * ${b}`, resultado);
            return resultado;
        },
        dividir: (a: number, b: number) => {
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

  