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
  readLine();
  const s = readLine().split("");

  let u = 0,
    result = 0;
  s.forEach((element) => {
    element == "U" ? u++ : u--;
    if (u == 0 && element == "U") {
      result++;
    }
  });
  console.log(result);
}
