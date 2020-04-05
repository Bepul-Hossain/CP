var input = require("fs").readFileSync("../dev/file.txt", "utf8");
var lines = input.split("\n");

var number = parseInt(lines[0]);

var month = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

console.log(month[number]);
