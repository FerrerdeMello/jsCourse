// Quantificadores
// * (opcionais) 0 ou n  {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1
// . qualquer caracter
// \Caractere de escape, para desconsiderar o que vem após
// {n, m} de n a m  // {n} exatamente n vezes  /{n,} de n até infinito

const { text, files } = require("./base");

// console.log(text);
// const regExp1 = /gru+po+/gi
// console.log(text.match(regExp1));

//const regExp2 = /\.jpe?g/gi
// for (const file of files) {
//   console.log(file, file.match(regExp2));
// }
// for (const file of files) {
//   const valid = file.match(regExp2);
//   if(!valid) continue;
//   console.log(file, valid);
// }

const regExp2 = /\.jpe{1,}g/gi
for (const file of files) {
  const valid = file.match(regExp2);
  if(!valid) continue;
  console.log(file, valid);
}
