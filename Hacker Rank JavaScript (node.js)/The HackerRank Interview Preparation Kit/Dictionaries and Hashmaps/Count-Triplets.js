"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  var count = 0;
  var map = {};
  var doubles = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let rx = x * r;
    let r2x = x * r * r;
    let wewantpair = [rx, r2x];
    if (doubles[wewantpair] !== undefined) {
      count = count + doubles[wewantpair];
    }
    let doub = [x, rx];
    if (doubles[doub] == undefined) {
      doubles[doub] = 0;
    }
    doubles[doub] = doubles[doub] + (map[rx] == undefined ? 0 : map[rx]);
    map[x] == undefined ? (map[x] = 1) : map[x]++;
  }
  //console.log(count);
  return count;
}

function main() {
  const ws = fs.createWriteStream("output.txt");

  const nr = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + "\n");

  ws.end();
}
