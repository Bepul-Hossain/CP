//cat ../../../dev/input.txt | node Monk_and_Welcome_Problem.js > ../../../dev/output.txt
"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
var std_line = 0;
process.stdin.on("data", function (input) {
  stdin_input += input;
});
process.stdin.on("end", function () {
  stdin_input = stdin_input.split("\n");
  main();
});
function readline() {
  return stdin_input[std_line++];
}

function main() {
   // console.log('ok');
    
  var n,
    x = [],
    y = [];
  n = parseInt(readline(n));
  x = readline().split(" ").map(Number);
  y = readline().split(" ").map(Number);

  for(let i=0; i<n-1; i++){
      process.stdout.write((x[i]+y[i])+" ")
      
  }
  process.stdout.write(x[n-1]+y[n-1]+"\n")
}
