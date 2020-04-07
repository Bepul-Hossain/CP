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
  var line = readLine();
  const input = line.split(" ");
  const A = parseInt(Number(input[0]));
  const B = parseInt(Number(input[1]));
  const C = parseInt(Number(input[2]));
  const D = parseInt(Number(input[3]));

  if (B > C && D > A && C + D > A + B && C > -1 && D > -1 && A % 2 === 0) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
}
