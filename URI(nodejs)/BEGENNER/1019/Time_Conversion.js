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

  const hour = parseInt(N / 3600);
  N %= 3600;
  const minute = parseInt(N / 60);
  N %= 60;
  const second = parseInt(N);

  console.log(hour + ":" + minute + ":" + second);
}
