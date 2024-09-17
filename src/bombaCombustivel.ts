export interface IBombaCombustivel {
    abastecerPorValor(valor: number): void;
    abastecerPorLitro(litros: number): void;
    alterarValor(novoValor: number): void;
    alterarCombustivel(novoTipo: string): void;
    alterarQuantidadeCombustivel(novaQuantidade: number): void;
    obterQuantidadeCombustivel(): number;
  }
  
  export function criarBombaCombustivel(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number): IBombaCombustivel {
    return {
      abastecerPorValor: (valor: number) => {
        const litros = valor / valorLitro;
        if (litros > quantidadeCombustivel) {
          throw new Error('Quantidade de combustível insuficiente.');
        }
        quantidadeCombustivel -= litros;
        console.log(`Foram abastecidos ${litros.toFixed(2)} litros.`);
      },
      abastecerPorLitro: (litros: number) => {
        if (litros > quantidadeCombustivel) {
          throw new Error('Quantidade de combustível insuficiente.');
        }
        const valor = litros * valorLitro;
        quantidadeCombustivel -= litros;
        console.log(`O valor a ser pago é R$ ${valor.toFixed(2)}.`);
      },
      alterarValor: (novoValor: number) => { valorLitro = novoValor; },
      alterarCombustivel: (novoTipo: string) => { tipoCombustivel = novoTipo; },
      alterarQuantidadeCombustivel: (novaQuantidade: number) => { quantidadeCombustivel = novaQuantidade; },
      obterQuantidadeCombustivel: () => quantidadeCombustivel,
    };
  }
  