const prompt = require("prompt-sync")({ sigint: true });

var N = parseInt(Number(prompt()));
console.log(N);
const nota_100 = parseInt(N / 100);
N = N % 100;
const nota_50 = parseInt(N / 50);
N = N % 50;
const nota_20 = parseInt(N / 20);
N = N % 20;
const nota_10 = parseInt(N / 10);
N = N % 10;
const nota_5 = parseInt(N / 5);
N = N % 5;
const nota_2 = parseInt(N / 2);
N = N % 2;
const nota_1 = parseInt(N);

console.log(nota_100 + " nota(s) de R$ 100,00");
console.log(nota_50 + " nota(s) de R$ 50,00");
console.log(nota_20 + " nota(s) de R$ 20,00");
console.log(nota_10 + " nota(s) de R$ 10,00");
console.log(nota_5 + " nota(s) de R$ 5,00");
console.log(nota_2 + " nota(s) de R$ 2,00");
console.log(nota_1 + " nota(s) de R$ 1,00");
