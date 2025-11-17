// $1 $2 $3 -> backreferences -> retrovisores

const { html2 } = require("./base");

console.log(html2);

console.log(html2.match(/<(\w+)>.+?<\/\1>/g));
console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));

