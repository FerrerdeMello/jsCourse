// ^   -> começa com
// $   -> termina com
// [^] -> negação
// \b = limite de palavra
const { cpfs2 } = require("./base");
const cpf = '254.224.877-45';

// console.log(cpfs2);
let cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log('CPF : More complex with anchors: ', cpfs2.match(cpfRegExp)); 
