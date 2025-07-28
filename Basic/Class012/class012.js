let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A
let varAux;

console.log(varA, varB, varC);

varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

console.log(varA, varB, varC);

// or other method is

let varAa = 'A';  // B
let varBb = 'B';  // C
let varCc = 'C';  // A

[varAa, varBb, varCc] = [varBb, varCc, varAa];
console.log(varA, varB, varC);