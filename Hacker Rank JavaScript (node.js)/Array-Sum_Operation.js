"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'performOperations' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER_ARRAY op
 */

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
   const ws = fs.createWriteStream("./output.txt");

  const input = readLine().split("\n");
  const nm = input[0].split(" ");
  var n = parseInt(nm[0]);
  var arr = Array(n);
  for (var i = 0; i < n; i++) {
    arr[i] = parseInt(i + 1);
  }
  const m = parseInt(nm[1]);
  for (let i = 0; i < m; i++) {
    var opi = parseInt(readLine().split("\n"));
    var result = 0;
    var flag = false;

    for (var j = 0; j < n; j++) {
      if (opi === arr[j]) {
        flag = true;
        break;
      }
    }
    if (flag) {
      let tmp = arr[0];
      arr[0] = arr[n - 1];
      arr[n - 1] = tmp;
    } else {
      arr[n - 1] = opi;
    }
    for (let k = 0; k < n; k++) {
      result = result + arr[k];
    }
    console.log(result);
  }
  //const result = performOperations(N, op);

  //  ws.write(result.join('&#039;\n&#039;') + '\n');

  // ws.end();
}
