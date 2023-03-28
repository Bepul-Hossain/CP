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

// Complete the freqQuery function below.
function freqQuery(queries) {
  let length = queries.length;  
  let mapobj = {};
  for (var i = 0; i < length; i++) {
    let [a,v]=queries[i];
    if (a == 1) {
      if (mapobj[v] == undefined) {
        mapobj[v] = 1;
      } else {
        mapobj[v]++;
      }
    } else if (a == 2) {
      if (mapobj[v] != undefined && mapobj[v] > 0) {
        mapobj[v]--;
      }
    } else if(a==3) {
      let  mapobjLenght = Object.keys(mapobj).length;
      console.log("leng "+mapobjLenght);
     // console.log(mapobjLenght);
      for (let j = 0; j <mapobjLenght-1; j++) {
          console.log(mapobj[queries[j][1]]);
          console.log("v "+v);
        if (v == mapobj[queries[j][1]]) {
         console.log("1");
         return;
        }
      }
     //console.log("0");
    }
  }
}

function main() {
  const ws = fs.createWriteStream("./output.txt");

  const q = parseInt(readLine().trim(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const ans = freqQuery(queries);

  ws.write(ans+"\n");

  ws.end();
}
