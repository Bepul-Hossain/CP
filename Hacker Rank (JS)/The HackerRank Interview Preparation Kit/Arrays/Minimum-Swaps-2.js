"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let minspawn = 0;
  let count = 0;
  let length = arr.length;
  for (let i = 1; i <= length; i++) {
    for (let j = i - 1; j <length; j++) {
      count++;
      if (arr[j] == i) {
        if (count == 1) {
          count = 0;
          j = length;
        } else {
          count = 0;
          arr[j] = arr[i - 1];
          j = length;
          minspawn++;
        }
      }
    }
  }
  return minspawn;
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const res = minimumSwaps(arr);

  ws.write(res + "\n");

  ws.end();
}
