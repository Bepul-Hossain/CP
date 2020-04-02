var input = require("fs").readFileSync("../inputFile.txt", "utf8");
var lines = input.split("\n");
var A ;

var i = 0;
var p = new Uint64Array();
var q = new Uint64Array();
var res = new Uint64Array();
while (lines[i] != null) {
  A = lines[i].split(" ");
  p = Number(A[0]);
  q = Number(A[1]);
  res = Number(p ^ q);
  console.log(res);
  i = i + 1;
}

// for (let i = 0; i < lines.length; i++) {
//   A = lines[i].split(" ");
//   console.log(parseInt(A[0]) ^ parseInt(A[1]));
// }

// console.log(A[1]);

// console.log(lines[0]);
// console.log(lines[1]);

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
