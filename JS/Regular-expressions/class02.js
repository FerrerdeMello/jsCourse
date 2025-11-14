const { text } = require('./base');
const regExp1 = /rock/gi;

console.log(text);
console.log(text.match(regExp1));
console.log(text.replace(/beatles/gi, 'Nirvana'));
console.log(text.replace(/beatles/gi, function(input){
  return ' ############### ' + input.toUpperCase() + ' ############### ';
}));