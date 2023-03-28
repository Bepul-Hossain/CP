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

function main() {
  var str = readLine().split("");
  str = str.map(String);
  var i = 0,
    res = 0,
    length = str.length;
  for (i = 0; i < length; i++) {
    if (str[i] == "a") {
      res = res + 1;
    }
  }
  //console.log("a " + res);
  const n = parseInt(readLine(), 10);
  var p = parseInt(n / length);
  res = p * res;
  p = n % length;
  for (i = 0; i < p; i++) {
    if (str[i] == "a") res = res + 1;
  }
  console.log(res);
}
