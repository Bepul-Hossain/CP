const prompt = require("prompt-sync")({ sigint: true });

var N = parseInt(Number(prompt()));
const year = parseInt(N / 365);
N %= 365;
const month = parseInt(N / 30);
N %= 30;
const day = parseInt(N);

console.log(year + " ano(s)");
console.log(month + " mes(es)");
console.log(day + " dia(s)");
