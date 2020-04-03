var input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split(" ");

var initial_hour = parseInt(lines[0]);
var initial_minute = parseInt(lines[1]);
var final_hour = parseInt(lines[2]);
var final_minute = parseInt(lines[3]);
var temp_hour;
var temp_minute;

temp_hour = final_hour - initial_hour;

if (temp_hour < 0) {
  temp_hour = 24 + (final_hour - initial_hour);
}

temp_minute = final_minute - initial_minute;
if (temp_minute < 0) {
  temp_minute = 60 + (final_minute - initial_minute);
  temp_hour--;
  if(temp_hour==-1) temp_hour=23;
}

if (final_hour === initial_hour && final_minute === initial_minute) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(
    "O JOGO DUROU " + temp_hour + " HORA(S) E " + temp_minute + " MINUTO(S)"
  );
}
