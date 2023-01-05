'use strict';

import { WriteStream, createWriteStream, ReadStream, createReadStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let rs: ReadStream = createReadStream("./input.txt");

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

rs.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

rs.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'andXorOr' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function andXorOr(a: number[]): number {
    // Write your code here
    let max = Math.max(...a);
    console.log(max);
    
    let result: number;
    let len: number = a.length;
    let stack: number[] = [];
    return 0;
}

function main() {
    const ws: WriteStream = createWriteStream("./output.txt");

    const aCount: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result: number = andXorOr(a);

    ws.write(result + '\n');

    ws.end();
    process.exit();
}
