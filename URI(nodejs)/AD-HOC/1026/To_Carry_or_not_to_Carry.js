var input = require("fs").readFileSync("../inputFile.txt", "utf8");
//var re = /^\s/;
var lines = input.split("\n");
var A=lines[0].split(' ')

console.log(A[1]);

console.log(lines[0]);
console.log(lines[1]);


// console.log(lines.length);
// for(let i=0; i<lines.length; i++){
// console.log(lines[i]);
// }
// console.log("ok "+lines[0][3]);

//console.log(" ok"+lines[2]);

// var i = 0;
// var j = 1;
// while (lines[i] && lines[j]) {
//  // console.log(lines[i] ^ lines[j]);
//   i = i + 2;
//   j = j + 3;
// }
