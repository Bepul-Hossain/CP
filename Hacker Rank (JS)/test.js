'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

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

function performOperations(N, op) {
    // Write your code here

   
  var arr = Array(N);
  for (var i = 0; i < N; i++) {
    arr[i] = parseInt(i + 1);
  }
  
  while (!undefined) {
    var result = 0;
    var flag = false;

    for (var j = 0; j < N; j++) {
      if (op === arr[j]) {
        flag = true;
        break;
      }
    }
    if (flag) {
      let tmp = arr[0];
      arr[0] = arr[N - 1];
      arr[N - 1] = tmp;
    } else {
      arr[N - 1] = op;
    }
    for (let k = 0; k < N; k++) {
      result = result + arr[k];
    }
   // console.log(result);
  }

    return result;

}

function main() {
   // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const ws = fs.createWriteStream("./output.txt");
    const N = parseInt(readLine().trim(), 10);

    const M = parseInt(readLine().trim(), 10);

    const op = readLine().replace(/\s+$/g, '').split(' ').map(opTemp => parseInt(opTemp, 10));
//console.log(op);
    const result = performOperations(N, op);
    console.log(result);

    // ws.write(result.join('&#039;\n&#039;') + '\n');

    // ws.end();
}
