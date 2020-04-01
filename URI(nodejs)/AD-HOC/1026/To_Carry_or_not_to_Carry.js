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
  var line;
  var input;
  var A;
  var B;
  
  while ((line = readLine())) {
    input = line.split(" ");
    A = Math.abs(parseInt(input[0]));
    B = Math.abs(parseInt(input[1]));
    console.log(A ^ B);
  }
}
