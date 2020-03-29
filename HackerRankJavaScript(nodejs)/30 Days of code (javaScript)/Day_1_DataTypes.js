//my practice code
const prompt = require("prompt-sync")({ sigint: true });

var i = 4;
var d = 4.0;
var s = "HackerRank ";
// Declare second integer, double, and String variables.
let i2 = Number(prompt());
//console.log(i2);
let d2 = Number(prompt());
let s2 = prompt();
// Read and save an integer, double, and String to your variables.

// Print the sum of both integer variables on a new line.
console.log(i + i2);
// Print the sum of the double variables on a new line.
console.log((d + d2).toFixed(1));

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + s2);
