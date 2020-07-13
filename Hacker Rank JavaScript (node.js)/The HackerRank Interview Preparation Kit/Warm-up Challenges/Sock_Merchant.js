"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

var inputString = "";
var currentLine = 0;

process.stdin.on("data", (input) => {
  inputString = inputString + input;
});
process.stdin.on("end", () => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));
  main();
});
function readLine() {
  //console.log("currentLine " + currentLine);
  return inputString[currentLine++];
}

function main() {
  let n = parseInt(readLine());
  let colors = readLine().split(" ");
  let pairedSocks = 0;
  let unpairedColors = {};

  colors.forEach((c) => {
    if (unpairedColors[c]) {
      //console.log("unpariedColors " + unpairedColors[c] + c);
      unpairedColors[c] = false;
      pairedSocks++;
    } else {
      unpairedColors[c] = true;
    }
  });
  console.log(pairedSocks);
}
