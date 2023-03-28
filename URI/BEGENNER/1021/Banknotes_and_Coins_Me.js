const prompt = require("prompt-sync")({ sigint: true });
const line = prompt();

const input = line.split(".");
var N = input[0];
var n = input[1];

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
const moeda_1 = parseInt(N);

const moeda_50 = parseInt(n / 50);
n = n % 50;
const moeda_25 = parseInt(n / 25);
n = n % 25;
const moeda_10 = parseInt(n / 10);
n = n % 10;
const moeda_5 = parseInt(n / 5);
n = n % 5;
const moeda_01 = parseInt(n);

console.log("NOTAS:");
console.log(nota_100 + " nota(s) de R$ 100.00");
console.log(nota_50 + " nota(s) de R$ 50.00");
console.log(nota_20 + " nota(s) de R$ 20.00");
console.log(nota_10 + " nota(s) de R$ 10.00");
console.log(nota_5 + " nota(s) de R$ 5.00");
console.log(nota_2 + " nota(s) de R$ 2.00");

console.log("MOEDAS:");
console.log(moeda_1 + " moeda(s) de R$ 1.00");
console.log(moeda_50 + " moeda(s) de R$ 0.50");
console.log(moeda_25 + " moeda(s) de R$ 0.25");
console.log(moeda_10 + " moeda(s) de R$ 0.10");
console.log(moeda_5 + " moeda(s) de R$ 0.05");
console.log(moeda_01 + " moeda(s) de R$ 0.01");
