class Pessoa {
  constructor (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Fran', 'Paul');
const p3 = new Pessoa('Paula', 'Nunes');
const p4 = new Pessoa('Joana', 'Ninha');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

console.log(p1.comer());
