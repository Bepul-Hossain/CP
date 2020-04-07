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
  const R = readLine();
  const x1=readLine();

  const y = x.split(" ");
  //const a = Number(y[0]);
  const b = Number(y[1]);
  const c = Number(y[2]);

  
  const y1 = x1.split(" ");
  //const a1 = Number(y1[0]);
  const b1 = Number(y1[1]);
  const c1 = Number(y1[2]);

  console.log("VALOR A PAGAR: R$ " + (b * c + b1 * c1).toFixed(2));
}
