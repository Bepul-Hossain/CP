const prompt = require("prompt-sync")({ sigint: true });

const x = prompt();
const y = x.split(" ");
//const a = Number(y[0]);
const b = Number(y[1]);
const c = Number(y[2]);

const x1 = prompt();
const y1 = x1.split(" ");
//const a1 = Number(y1[0]);
const b1 = Number(y1[1]);
const c1 = Number(y1[2]);

console.log("VALOR A PAGAR: R$ "+(b * c + b1 * c1).toFixed(2));

//const number = lines[0].split(" ");
