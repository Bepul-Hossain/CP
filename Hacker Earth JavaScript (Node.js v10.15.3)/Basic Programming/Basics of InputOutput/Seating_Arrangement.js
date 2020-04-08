"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

var stdin_input = "";
var _index = 0;
process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  stdin_input = stdin_input.split("\n");
  main();
});
function read() {
  return stdin_input[_index++];
}

function main() {
  const T = parseInt(read());

  let p,
    q,
    seat,
    oposit_face,
    arr = [];
  for (let i = 0; i < T; i++) {
    arr[i] = parseInt(read());
    p = parseInt(arr[i] / 12);
    if (arr[i]%12==0) {
        p=p-1;
    }
    q = arr[i] % 12;
    switch (q) {
      case 1:
        seat = "WS";
        oposit_face = 12;
        break;
      case 2:
        seat = "MS";
        oposit_face = 11;
        break;
      case 3:
        seat = "AS";
        oposit_face = 10;
        break;
      case 4:
        seat = "AS";
        oposit_face = 9;
        break;
      case 5:
        seat = "MS";
        oposit_face = 8;
        break;
      case 6:
        seat = "WS";
        oposit_face = 7;
        break;

      case 7:
        seat = "WS";
        oposit_face = 6;
        break;
      case 8:
        seat = "MS";
        oposit_face = 5;
        break;
      case 9:
        seat = "AS";
        oposit_face = 4;
        break;
      case 10:
        seat = "AS";
        oposit_face = 3;
        break;
      case 11:
        seat = "MS";
        oposit_face = 2;
        break;
      case 0:
        seat = "WS";
        oposit_face = 1;
      default:
        break;
    }
    process.stdout.write(p * 12 + oposit_face + " " + seat + "\n");
  }
}
