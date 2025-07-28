const name = 'Luiz';
const lastname = 'Miranda';
const age = 30;

function Sum(x, y) {
  return x + y;
}

export { name, lastname, age, Sum };

export class Person {
  constructor (name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}
