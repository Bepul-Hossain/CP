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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  let s1obj = {};
  let s2obj = {};
  let lengths1 = s1.length,
    lengths2 = s2.length;
  for (let i = 0; i < lengths1; i++) {
    s1obj[s1[i]] = s1[i];
    //console.log("s1obj "+s1obj[s1[i]]);
  }
  for (let i = 0; i < lengths2; i++) {
    s2obj[s2[i]] = s2[i];
    //console.log("s1obj "+s1obj[s1[i]]);
  }
  for (let i = 0; i < lengths2; i++) {
    if (s2obj[s2[i]] == s1obj[s2[i]]) {
      return "YES";
    }
  }
  return "NO";
}

function main() {
  const ws = fs.createWriteStream("output.txt");

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = twoStrings(s1, s2);

    ws.write(result + "\n");
  }

  ws.end();
}
