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

// Complete the countInversions function below.
function countInversions(arr) {
  let length = arr.length;
  let count = 0,
    tmp;
  let flag = true,j=0;
  while (flag) {
    flag = false;
    for (let i = 0; i < length; i++) {
       // console.log(j++);
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        flag = true;
        count++;
      }
    }
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const arr = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));

    const result = countInversions(arr);

    ws.write(result + "\n");
  }

  ws.end();
}
