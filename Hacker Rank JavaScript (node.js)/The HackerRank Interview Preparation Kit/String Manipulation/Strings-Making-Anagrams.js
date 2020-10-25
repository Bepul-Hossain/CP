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

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  let a_len = a.length,
    b_len = b.length,
    sum = 0;
  let a_map = {},
    b_map = {};
  for (let i = 0; i < a_len; i++) {
    if (a_map[a[i]] == undefined) {
      a_map[a[i]] = 1;
    } else {
      a_map[a[i]]++;
    }
  }
  for (let i = 0; i < b_len; i++) {
    // console.log(b[i]);
    if ((a_map[b[i]] == undefined) | (a_map[b[i]] == 0)) {
      // console.log(a_map[b[i]]);
      sum++;
    } else {
      a_len--;
      a_map[b[i]]--;
    }
  }
  //console.log(sum + a_len);
  return sum + a_len;
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const a = readLine();

  const b = readLine();

  const res = makeAnagram(a, b);

  ws.write(res + "\n");

  ws.end();
}
