// g - global (find all occurrences)
// i - insensitive
// ( ) groups
// | or

const { text } = require('./base');
const regExp1 = /Grupo/gi;

// This function test will test if exist regExp1 inside text
console.log(regExp1.test(text));

// This function exec will test if exist regExp1 inside text
console.log(regExp1.exec(text));

const regExp2 = /(rock|beat)( and roll)/i;
const found = (regExp2.exec(text));
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
