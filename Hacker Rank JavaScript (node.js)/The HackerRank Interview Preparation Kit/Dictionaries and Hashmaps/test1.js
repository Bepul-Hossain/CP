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
  let freq = [];
  for (var i = 0; i < length; i++) {
    let [a, v] = queries[i];
    let initialvalue = mapobj[v] || 0;
    switch (a) {
      case 1:
        mapobj[v] = initialvalue + 1;
        freq[initialvalue] = (freq[initialvalue] || 0) - 1;
        freq[initialvalue + 1] = (freq[initialvalue + 1] || 0) + 1;
        if (mapobj[v] == undefined) {
          mapobj[v] = 1;
          freq[mapobj[v]] = 1;
        } else {
          mapobj[v]++;
          freq[mapobj[v] - 1]++;

          //freq[mapobj[v]] = true;
        }
        break;
      case 2:
        //console.log("map "+mapobj[v]);
        if (mapobj[v] != undefined && mapobj[v] > 0) {
          mapobj[v]--;
          freq[mapobj[v]]--;

          //console.log("ma "+mapobj[v]);
          freq[mapobj[v]] = true;
        }
        break;
      case 3:
        console.log("ok " + freq[v]);
        freq[v] == true ? console.log("1") : console.log("0");
        break;
    }
  }
  // Time limit exit but point gain 33 on below this code
  // let length = queries.length;
  // let mapobj = {};
  // for (var i = 0; i < length; i++) {
  //   let [a, v] = queries[i];
  //   switch (a) {
  //     case 1:
  //       mapobj[v] == undefined ? (mapobj[v] = 1) : mapobj[v]++;
  //       break;
  //     case 2:
  //       if (mapobj[v] != undefined && mapobj[v] > 0) {
  //         mapobj[v]--;
  //       }
  //       break;
  //     case 3:
  //       let flag=false;
  //       Object.keys(mapobj).forEach(function(key) {
  //           if(v===mapobj[key]){
  //               flag=true;
  //           }
  //         });
  //       (flag)?console.log("1"):console.log("0");
  //       break;
  //   }
  // }
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

  ws.write(ans + "\n");

  ws.end();
}
