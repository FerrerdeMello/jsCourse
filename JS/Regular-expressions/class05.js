// range and sets
// [abc] -> a or b or c conjunto
// [^abc] -> not a, b or c conjunto negado

const { alphabet } = require("./base");

console.log(alphabet);
console.log(alphabet.match(/[abc]/g)); // 
console.log(alphabet.match(/[abc123]/g)); // 
console.log(alphabet.match(/[^abc123]/g));
console.log(alphabet.match(/[0-9]+/g));
console.log(alphabet.match(/[A-Z]+/g));
console.log(alphabet.match(/[a-k]+/g));
console.log(alphabet.match(/[^a-zA-Z0-9]+/g));  // Negação dentro do conjunto
console.log(alphabet.match(/[\u00A0]+/g));  // Unicode

