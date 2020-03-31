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
  var N = parseInt(Number(readLine()));
  
  const year = parseInt(N / 365);
  N %= 365;
  const month = parseInt(N / 30);
  N %= 30;
  const day = parseInt(N);

  console.log(year + " ano(s)");
  console.log(month + " mes(es)");
  console.log(day + " dia(s)");
}
