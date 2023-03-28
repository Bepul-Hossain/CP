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

// Complete the rotLeft function below.
function rotLeft(a, d) {
  let p = a.splice(0, d);
  let q = a.concat(p);
  return q;
}

function main() {
  //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const ws = fs.createWriteStream("./output");

  const nd = readLine().split(" ");

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const a = readLine()
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = rotLeft(a, d);

  console.log(result);
  // ws.write(result.join(' ') + '\n');

  ws.end();
}
