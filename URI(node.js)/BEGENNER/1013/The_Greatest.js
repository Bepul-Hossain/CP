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
  const A = parseInt(Number(input[0]));
  const B = parseInt(Number(input[1]));
  const C = parseInt(Number(input[2]));

  const maxab = (A + B + Math.abs(A - B)) / 2;
  const max = (maxab + C + Math.abs(maxab - C)) / 2;
  console.log(max + " eh o maior");
}
