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

// Complete the maximumToys function below.
function maximumToys(a, k) {
  var tmp,
    sum = 0,
    n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[i] > a[j + 1]) {
        tmp = a[i];
        a[i] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
    if (a[i] < k) {
      sum++;
      k = k - a[i];
    } else {
      return sum;
    }
  }
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const prices = readLine()
    .split(" ")
    .map((pricesTemp) => parseInt(pricesTemp, 10));

  let result = maximumToys(prices, k);

  ws.write(result + "\n");

  ws.end();
}
