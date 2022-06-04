// https://www.hackerrank.com/challenges/maximum-element/problem?isFullScreen=false

'use strict';
// import filesystem module
import { createReadStream, createWriteStream, WriteStream, ReadStream } from 'fs'

// create a read stream to read data from hello.txt
const rs: ReadStream = createReadStream("./input.txt");

// create a write stream
// to write the read data into a file called toWrite.txt
const ws: WriteStream = createWriteStream("./output.txt");

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

// listen for data event on ReadableStream
// as the data comes in
rs.on("data", (data) => {
    inputString = data.toString()
});

rs.on("end", () => {
    inputLines = inputString.split('\n');
    main();
})

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    let ops: string[] = [];

    for (let i: number = 0; i < n; i++) {

        const opsItem: string = readLine();
        ops.push(opsItem);
    }

    const res: number[] = getMax(ops);
    // to write the data into WritableStream
    ws.write(res.join('\n') + '\n');

    ws.end();
}

function readLine(): string {
    return inputLines[currentLine++];
}

function getMax(operations: string[]): number[] {
    // Write your code here
    let a = [], res = [];
    let j: number = -1;
    for (let i: number = 0; i < operations.length; i++) {
        let op: string = operations[i];
        let opArr: string[] = op.split(' ');
        let opType: number = parseInt(opArr[0]);
        if (opType === 1) {
            let num1: number = parseInt(opArr[1]);
            a.push(num1);
        } else if (opType === 2) {
           a.pop();
        } else {
            res.push(Math.max(...a));
        }
    }
    return res;
}

//ts-node index.ts