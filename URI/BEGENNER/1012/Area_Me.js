const prompt = require("prompt-sync")({ sigint: true });
const line = prompt();

const input = line.split(" ");
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
//console.log(A);

const TRIANGULO = (0.5 * A * C).toFixed(3);
const CIRCULO = (3.14159 * C * C).toFixed(3);
const TRAPEZIO = (0.5 * (A + B) * C).toFixed(3);
const QUADRADO = (B * B).toFixed(3);
const RETANGULO = (A * B).toFixed(3);

console.log("TRIANGULO: " + TRIANGULO);
console.log("CIRCULO: " + CIRCULO);
console.log("TRAPEZIO: " + TRAPEZIO);
console.log("QUADRADO: " + QUADRADO);
console.log("RETANGULO: " + RETANGULO);
