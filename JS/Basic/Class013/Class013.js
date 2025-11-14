//    01234567

let anyString = "A little text!";

console.log(anyString.length);

console.log(anyString[3]);
console.log(anyString[4]);
console.log(anyString.charAt(5));

console.log(anyString.indexOf('ex'));
console.log(anyString.lastIndexOf('te'));

// EXPRESSÃO REGULAR
console.log(anyString.match(/[a-z]/));
console.log(anyString.search(/x/));
console.log(anyString.replace('A', 'The'));

console.log(anyString.slice(2, 4));
console.log(anyString.split('t')); // divid by a value
console.log(anyString.toUpperCase());
console.log(anyString.toLowerCase());
