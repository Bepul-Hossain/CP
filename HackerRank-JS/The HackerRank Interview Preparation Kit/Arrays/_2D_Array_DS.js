
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

// Complete the hourglassSum function below.

function main() {
  let sum,
    max = false;
  var arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }
  // console.log(arr[0][0] + arr[0][0]);

  for (let i = 0; i < 4; i++) {
    sum = 0;
    for (let j = 0; j < 4; j++) {
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (max === false || max < sum) {
        max = sum;
        // console.log("max =" + max);
      }
    }
  }
  console.log(max);
}

// This code is also currect
// function processData(input) {
//   //Enter your code here
  
//   var data = [];
//   var max = false;
//   var sum = 0;
  
//   // convert line to 2D Array of strings
//   for (var i = 0; i < 6; ++i) {
//       data[i] = input.split("\n")[i].trim().split(" ");
//   }
  
//   // convert 2D Array of strings to 2D Array of numbers
//   for (var i = 0; i < 6; ++i) {
//       for (var j = 0; j < 6; ++j) {
//           data[i][j] = parseInt(data[i][j]);
//       }
//   }
  
//   for (var i = 0; i < 4; ++i) {
//       for (var j = 0; j < 4; ++j) {
//           sum = data[i][j] + data[i][j + 1] + data[i][j + 2] + data[i + 1][j + 1] + data[i + 2][j] + data[i + 2][j + 1] + data[i +2][j + 2];
          
//           if (max === false || max < sum) {
//               max = sum;
//           }
//       }
//   }
  
//   console.log(max);
// } 

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//   _input += input;
// });

// process.stdin.on("end", function () {
//  processData(_input);
// });
