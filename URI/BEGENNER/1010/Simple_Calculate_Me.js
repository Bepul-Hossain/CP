const prompt = require("prompt-sync")({ sigint: true });

const x = prompt();
const y = x.split(" ");

const b = Number(y[1]);
const c = Number(y[2]);

const x1 = prompt();
const y1 = x1.split(" ");

const b1 = Number(y1[1]);
const c1 = Number(y1[2]);

console.log("VALOR A PAGAR: R$ "+(b * c + b1 * c1).toFixed(2));

