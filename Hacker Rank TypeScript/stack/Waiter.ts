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

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */

function waiter(number: number[], q: number): number[] {
    // Write your code here
    
}

function main() {
    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const q: number = parseInt(firstMultipleInput[1], 10);

    const number: number[] = readLine().replace(/\s+$/g, '').split(' ').map(numberTemp => parseInt(numberTemp, 10));

    const result: number[] = waiter(number, q);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


//ts-node Waiter.ts