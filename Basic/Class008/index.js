const name = 'Joel';
const lastName = 'Ferrer de Mello';
const age = 47;
const weight = 78;
const heightinM = 1.78; // <-- NESTE LOCAL
let imc; // peso / (altura * altura)
let yearBirth;

imc = weight / (heightinM * heightinM);
yearBirth = 2025 - age;

console.log('My name is ', name, lastName);
console.log(`My age is ${age} and I was born in ${yearBirth}`);
console.log(`My weight is ${weight} kg`);
console.log(`and my height is ${heightinM} m`);
console.log('So, my IMC is ', imc);
