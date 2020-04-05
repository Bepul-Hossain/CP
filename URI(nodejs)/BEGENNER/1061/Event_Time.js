const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");

//storing initial time
const start_Day = parseInt(lines[0].split(" ")[1]);
const start_Hour = parseInt(lines[1].split(" : ")[0]);
const start_Minute = parseInt(lines[1].split(" : ")[1]);
const start_Second = parseInt(lines[1].split(" : ")[2]);

//console.log(A);

// storing final time
const end_Day = parseInt(lines[2].split(" ")[1]);
const end_Hour = parseInt(lines[3].split(" : ")[0]);
const end_Minute = parseInt(lines[3].split(" : ")[1]);
const end_Second = parseInt(lines[3].split(" : ")[2]);

var day = end_Day - start_Day;
var hour = end_Hour - start_Hour;
var minute = end_Minute - start_Minute;
var second = end_Second - start_Second;
if (second < 0) {
  second = 60 + second;
  minute--;
}
if (minute < 0) {
  minute = 60 + minute;
  hour--;
}
if (hour < 0) {
  hour = 24 + hour;
  day--;
}
console.log(day + " dia(s)");
console.log(hour + " hora(s)");
console.log(minute + " minuto(s)");
console.log(second + " segundo(s)");
