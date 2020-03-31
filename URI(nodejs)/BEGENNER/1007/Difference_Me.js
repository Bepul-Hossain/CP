const prompt = require("prompt-sync")({ sigint: true });
const A = Number(prompt());
const B = Number(prompt());
const C = Number(prompt());
const D = Number(prompt());
console.log("DIFERENCA = " + (A * B - C * D));
