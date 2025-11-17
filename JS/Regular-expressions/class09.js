// $1 $2 $3 -> backreferences -> retrovisores

const { lookahead } = require("./base");

console.log(lookahead);

console.log(lookahead.match(/.+[^in]active$/gim)); // positive lookbehind

// Positive lookahead (frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active)/gim)); // positive lookbehind

// Positive lookahead (frases que tem inactive)
console.log(lookahead.match(/.+(?=\s+inactive)/gim)); // positive lookbehind

// Negative lookahead (frase que não tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Positive lookbehind (frases que começam com ONLINE)
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

// Negative lookbehind (frases que NÃO começam com ONLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

