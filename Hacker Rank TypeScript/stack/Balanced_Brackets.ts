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

function isBalanced(s: string): string {
    // Write your code here
    let s1 = s.trim().length;
    for (let i = 0; i < s1;) {
        let s2 = s.trim().length;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        i = s.trim().length;
        if (s2 == i) {
            i = s1;
        }
    }
    if (s.trim().length == 0)
        return "YES"
    else
        return "NO"

    // let stack: string[] = [];
    // let str: string[] = s.trim().split('');
    // let p: any | string;
    // let flag: boolean = false;
    // for (let i: number = 0; i < str.length; i++) {
    //     let x = str[i];
    //     if ((x === '(') || (x === '{') || (x === '[')) {
    //         stack.push(x);
    //     }
    //     else if (stack.length <= 0) {
    //         flag = false;
    //         break;
    //     }
    //     else {
    //         p = stack.pop();
    //         if ((x === ')' && p === '(') || (x === '}' && p === '{') || (x === ']' && p === '[')) {
    //             flag = true;
    //         }
    //         else {
    //             flag = false;
    //             break;
    //         }
    //     }
    // }
    // return flag ? "YES" : "NO";
}

function main() {
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const s: string = readLine();
        const result: string = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}


//ts-node index.ts