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
  const t = parseInt(readLine(), 10);
  for (let i = 0; i < t; i++) {
    const number = parseInt(readLine(), 10);

    isPrime(number) ? console.log("Prime") : console.log("Not prime");
  }
}

function isPrime(number) {
  if (number <= 1) return false;
  // The check for the number 2 and 3
  else if (number <= 3) return true;
  else if (number % 2 == 0 || number % 3 == 0) return false;

  for (var i = 5; i * i <=number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }

  return true;
}
