import './assets/css/style.css';

import { name, lastname as lname, age, Sum, Person } from './module1';

console.info(`The full name is ${name} ${lname}, and ${name} is ${age} year old.`);

console.info(`The sum of the two values ​​is = `, Sum (5, 5));

const p1 = new Person('Joel', 'Ferrer');

console.info(`The p1 full name is ${p1.name} ${p1.lastname}.`);
