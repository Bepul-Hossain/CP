const input = require("fs").readFileSync("dev/file.txt", "utf8");
const lines = input.split("\n");

const n = parseInt(lines[0]);
const addressBook = new Map();

for (let i = 1; i <= n; i++) {
  const entry = lines[i].split(" ");
  addressBook.set(entry[0], entry[1]);
}

for (let i = n + 1; i < lines.length; i++) {
  const entry = lines[i];
  const value = addressBook.get(entry);
  if (value) {
    console.log(`${entry}=${value}`);
  } else {
    console.log("Not found");
  }
}
/*
// Another way.
input = input.split("\n");
var N = parseInt(input[0]);

var phonebook = [];
for (var k = 0; k < N; k++) {
  var line = input[k + 1];
  line = line.split(" ");
  phonebook[line[0]] = line[1];
}

for (var k = N + 1; k < input.length; k++) {
  var num = phonebook[input[k]];
  if (num !== undefined) {
    console.log(input[k] + "=" + num);
  } else {
    console.log("Not found");
  }
}
*/