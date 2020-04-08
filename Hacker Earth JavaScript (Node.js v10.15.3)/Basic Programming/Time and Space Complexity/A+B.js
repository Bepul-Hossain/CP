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
  var x = readline().split(" ");
 // console.log(x[]);
  
  while (x != undefined) {
   
    //console.log(x);
    
    var len,
      p,
      q = 0,
      res = 0;

    (x[0].length > x[1].length) ? (len = x[0].length) : (len = x[1].length);

    for (let i = len - 1; i >= 0; i--) {
   
      p = parseInt(x[0][i]) + parseInt(x[1][i]) + q;
      p > 10 ? ((p = p - 10), (q = 1)) : (q = 0);

      res = res + p.toString;
    }
    q == 1 ? (res = q + res) : (res = res);
    console.log(res);
    var x = readline().split(" ");
  }
}
