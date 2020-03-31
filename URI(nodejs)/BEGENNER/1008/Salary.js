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
  const A = parseInt(readLine(), 10);
  const B = parseInt(readLine(), 10);
  const C = parseFloat(readLine(), 10);
  console.log("NUMBER = " + A);
  console.log("SALARY = U$ " + (B * C).toFixed(2));
}
