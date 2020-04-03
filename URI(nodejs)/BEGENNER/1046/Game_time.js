var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");


var initial_time = parseInt(lines[0]);
var final_time = parseInt(lines[1]);
var temp;

temp = final_time - initial_time;

if (temp < 0) {
  temp = 24 + (final_time - initial_time);
}

if (final_time == initial_time) {
  console.log("O JOGO DUROU 24 HORA(S)");
} else {
  console.log("O JOGO DUROU " + temp + " HORA(S)");
}
