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
  console.log('ok');
  
  main();
});
function readline() {
  return stdin_input[std_line++];
}

function main() {
  // var x=[]
  // x = readline().split(" ").map();
  // // console.log(x[]);

  // while (x != undefined) {
  //   // console.log(x[0].length);
  //   // console.log(x[1].length);
    

  //   var len,
  //     q = 0,
  //     res = 0;
  //   len = x[0].length - x[1].length + 1;
  //   console.log(len);
  //   if(len>0){
  //     for(let i=-len; i<0; i++){
  //       x[1][i]=0;
  //     }
  //   }else{
  //     for(let i=len; i<0; i++){
  //       x[0][i]=0;
  //     }
  //   }

  //   // p = parseInt(x[0][len - 1] + parseInt(x[1][len - 1]));
  //   // p > 10 ? ((p = p - 10), (q = 1)) : (q = 0);
  //   // res = p;
  //   // for (let i = len - 2; i >= 0; i--) {
  //   //   p = parseInt(x[0][i]) + parseInt(x[1][i]) + q;
  //   //   p > 10 ? ((p = p - 10), (q = 1)) : (q = 0);

  //   //   res = res + p.toString;
  //   // }
  //   // q == 1 ? (res = q + res) : (res = res);
  //   // console.log(res);
  //   x = readline().split(" ");
  // }
}
