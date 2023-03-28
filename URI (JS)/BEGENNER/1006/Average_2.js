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
  const A = 2*parseFloat(readLine(), 10);
  const B = 3*parseFloat(readLine(), 10);
  const C = 5*parseFloat(readLine(), 10);
  console.log("MEDIA = " + ((A + B + C) / 10).toFixed(1));
}
