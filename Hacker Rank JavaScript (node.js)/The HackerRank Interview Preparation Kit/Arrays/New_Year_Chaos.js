"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let length= q.length, sum=0;
    for(let i=0; i<length; i++){
        if(q[i]>i+3){
            console.log("Too chaotic");
            return;
        }
    }
    var arr = [...Array(length).keys()].map(i=>i+1);
    //console.log("arr "+arr);
    for(let i=length-1; i>-1; i--){
        let tmp;
        if(q[i]!=arr[i] ){
            tmp=arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=tmp;
            sum++;
        }
    }
    console.log(sum);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(" ")
      .map((qTemp) => parseInt(qTemp, 10));
    minimumBribes(q);
  }
}
