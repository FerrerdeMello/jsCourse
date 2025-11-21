export class Person {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public room: string
  ) {
    super(name, surname, age, cpf);
  }

  getFullName(): string {
    console.log('MAKE ANYTHING BEFORE...');
    const result = super.getFullName();
    return result + ' HEYYYYYYYY!!!';
  }
}

export class Consumer extends Person {
  getFullName(): string {
    return `Consumer Name: ${this.name} ${this.surname}`;
  }
}

const student01 = new Student('Ana', 'Silva', 20, '123.456.789-00', '101');
console.log(`Nome do estudante: ${student01.getFullName()}`); // Acessível
console.log(`Idade do estudante: ${student01.getAge()}`); // Acessível
console.log(`CPF do estudante: ${student01.getCpf()}`); // Acessível
console.log(`Sala do estudante: ${student01.room}`); // Acessível

const consumer01 = new Consumer('Carlos', 'Santos', 30, '987.654.321-00');
console.log(`Nome do consumidor: ${consumer01.getFullName()}`); // Acessível
console.log(`Idade do consumidor: ${consumer01.getAge()}`); // Acessível
console.log(`CPF do consumidor: ${consumer01.getCpf()}`); // Acessível
