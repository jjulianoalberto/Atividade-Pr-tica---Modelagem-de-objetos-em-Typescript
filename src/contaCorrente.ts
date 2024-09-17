export interface IContaCorrente {
    alterarNome(novoNome: string): void;
    deposito(valor: number): void;
    saque(valor: number): void;
    obterSaldo(): number;
  }
  
  export function criarContaCorrente(numeroConta: string, nomeCorrentista: string, saldo: number = 0): IContaCorrente {
    let saldoAtual = saldo;
  
    return {
      alterarNome: (novoNome: string) => { nomeCorrentista = novoNome; },
      deposito: (valor: number) => {
        if (valor <= 0) {
          throw new Error('O valor do depósito deve ser positivo.');
        }
        saldoAtual += valor;
      },
      saque: (valor: number) => {
        if (valor <= 0) {
          throw new Error('O valor do saque deve ser positivo.');
        }
        if (valor > saldoAtual) {
          throw new Error('Saldo insuficiente.');
        }
        saldoAtual -= valor;
      },
      obterSaldo: () => saldoAtual,
    };
  }
  