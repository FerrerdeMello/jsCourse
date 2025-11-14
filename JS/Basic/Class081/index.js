const _speed = Symbol('speed');  // It was the creation of a KEY

class Car {
  constructor(nome) {
    this.nome = nome;
    this[_speed] = 0;
  }

  set speed (value) {
    console.log('SETTER');
    if(typeof value !== 'number') return;
    if(value >= 100 || value <= 0) return;
    this[_speed] = value;
  }

  get speed () {
    console.log('GETTER');
    return this[_speed];
  }

  accelerate() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  brake() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const c1 = new Car('Fusca');

for(let i = 0; i <= 200; i++ ) {
 c1.accelerate();
}

c1.speed = 150;
console.log(c1);
console.log(c1.speed);
console.log(`The Car's speed is ${c1.speed}.`);
