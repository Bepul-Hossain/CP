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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  let sum = 0;
  //new BigUint64Array
  let arr = Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    // console.log(queries[i][0]);
    //    console.log('a '+a);
    //    console.log('b '+b);
    for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
      arr[j] = arr[j] + queries[i][2];
      if (arr[j] > sum) sum = arr[j];
    }
    //console.log(arr);
  }
  return sum;
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const nm = readLine().split(" ");

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine()
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  let result = arrayManipulation(n, queries);

  ws.write(result + "\n");

  ws.end();
}
