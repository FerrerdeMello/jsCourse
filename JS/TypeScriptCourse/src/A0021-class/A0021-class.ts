export class Empresa {
  public readonly nome: string;
  public readonly cnpj: string;
  private readonly colaboradores: Colaboradores[] = [];

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaboradores): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(
        `Nome: ${colaborador.nome} ${colaborador.sobrenome} - Cargo: ${colaborador.cargo} - Salário: ${colaborador.salario}`
      );
    }
  }

  getCNPJ(): string {
    return this.cnpj;
  }
}

export class Colaboradores {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public readonly cargo: string,
    public readonly salario: number
  ) {}
}

const empresa01 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador01 = new Colaboradores('João', 'Silva', 'Instrutor', 4000);
const colaborador02 = new Colaboradores('Maria', 'Sá', 'Instrutora', 4500);
const colaborador03 = new Colaboradores('Pedro', 'Santos', 'Instrutor', 4200);
empresa01.addColaborador(colaborador01);
empresa01.addColaborador(colaborador02);
empresa01.addColaborador(colaborador03);
console.log(`Nome da empresa é: ${empresa01.nome}`); // Acessível
console.log(`O CNPJ da empresa é: ${empresa01.cnpj}`); // Erro: Propriedade 'cnpj' é privada e só pode ser acessada dentro da classe 'Empresa'.
console.log(`Os colaboradores da empresa são:`);
console.log(empresa01.mostrarColaboradores());
