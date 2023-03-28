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
  const line1 = readLine();
  const input1 = line1.split(" ");
  const x1 = parseFloat(input1[0]);
  const y1 = parseFloat(input1[1]);

  const line2 = readLine();
  const input2 = line2.split(" ");
  const x2 = parseFloat(input2[0]);
  const y2 = parseFloat(input2[1]);

  const p1 = Math.abs(x1 - x2);
  const p2 = Math.abs(y1 - y2);

  const distance = Math.sqrt(p1 * p1 + p2 * p2);

  console.log(distance.toFixed(4));
}
