"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const line = readLine();
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
}
