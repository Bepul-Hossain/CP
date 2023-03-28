'use strict';
// import filesystem module
import { createReadStream, createWriteStream, WriteStream, ReadStream } from 'fs'

// create a read stream to read data from hello.txt
const rs: ReadStream = createReadStream("./input.txt");

// create a write stream
// to write the read data into a file called toWrite.txt
const ws: WriteStream = createWriteStream("./output.txt");

// listen for data event on ReadbelStream
// to write the data into WritableStream
// as the data comes in
rs.on("data", (data) => {
    console.log(data.toString());
    
    console.log("New chunq Recieved");
    ws.write("hello")
    ws.write(data);
});

//run => ts-node hello.ts