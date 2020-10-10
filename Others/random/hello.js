// // process.stdout.write("write something\n");
// // process.stdin.resume();
// // process.stdin.once("data", (res) => {
// //   console.log("Your write "+res.toString().trim());
// //   process.exit();
// // });
// "use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdout.write("write anything\n")
// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//     console.log("ok");
//   return inputString[currentLine++];
// }

// function main(){
//     const input = readLine().split("\n");
//     console.log(input);
// }


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readline() {
    return inputString[currentLine++];
}

// thats all what you have to write to get input from stdin, using readLine.↵

// Main code runs in main();↵


function main() {
    const parameterVariable = readline();
    var line2 = readline(); // you cannot use let on CF so use just var↵
    
    greeting(parameterVariable);
    greeting(line2);
}

function greeting(parameterVariable) {
    console.log('Hello, World!'); // change console.log() -> print() before submitting on codeforces.↵
    console.log(parameterVariable);
 // Write a line of code that prints parameterVariable to stdout using console.log:  ↵
}
