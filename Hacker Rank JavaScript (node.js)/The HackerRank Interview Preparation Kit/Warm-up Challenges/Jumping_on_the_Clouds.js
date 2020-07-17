"use strict";

const fs = require("fs");

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

// Complete the countingValleys function below.

function main() {
  const n = parseInt(readLine(), 10);
  var s = readLine().split(" ");
  s=s.map(Number)
//console.log(s.length);
  let result = 0,
    i = 0;
  while (i < s.length) {
    s[i + 2] == 0 ? (i = i + 2) : (i = i + 1);

    if (s[i] == 0) result++;
  }
  console.log(result);
}
