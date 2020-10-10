"use strict";

const fs = require("fs");
const { PassThrough } = require("stream");

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

function sortTill_d(expenditure, d) {
  let tmp;
  for (let i = 0; i < d; i++) {
    for (let j = i + 1; j < d; j++) {
      if (expenditure[i] > expenditure[j]) {
        tmp = expenditure[i];
        expenditure[i] = expenditure[j];
        expenditure[j] = tmp;
      }
    }
  }
}
function medianfunc(expenditure, d) {
   // console.log("d = "+d);
  if (d & 1) {
    let p = parseInt(d / 2);
    return expenditure[p];
  } else {
    let p = parseInt(d / 2) - 1;
    let q = parseInt(d / 2);
    return (expenditure[p] + expenditure[q]) / 2;
  }
}
// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  let count = 0;
  sortTill_d(expenditure, d);
  for (let i = d; i < expenditure.length; i++) {
    let median = medianfunc(expenditure, d);
    console.log("med = "+median);
    if (expenditure[i] >= median * 2) {
      count++;
    }
    for (let k = 1; k <= d; k++) {
      let tmp = expenditure[i];
      if (expenditure[i] < expenditure[d - k]) {
        expenditure[d - k + 1] = expenditure[d - k];
      } else {
        expenditure[d-k+1] = tmp;
        k=d+1;
      }
    }
    console.log(expenditure);
  }
  //console.log(expenditure);
 console.log("count = "+count);
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const nd = readLine().split(" ");

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const expenditure = readLine()
    .split(" ")
    .map((expenditureTemp) => parseInt(expenditureTemp, 10));

  let result = activityNotifications(expenditure, d);

  ws.write(result + "\n");

  ws.end();
}
