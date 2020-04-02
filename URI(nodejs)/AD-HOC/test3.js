 var buffer = new ArrayBuffer(8);

 var uint8 = new Uint8Array(buffer);
 uint8.length; // 8 (matches the length of the buffer)



// var uint8 = new Uint8Array(buffer, 1, 3);
// uint8.length; // 5 (as specified when constructing the Uint8Array)
 console.log(buffer);
var uint8 = new Uint8Array(buffer, 0);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
console.log(uint8.length);

console.log(Float64Array.BYTES_PER_ELEMENT);
// expected output: 8

console.log(Uint32Array.BYTES_PER_ELEMENT);
// expected output: 1
// From a length
var uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// From an array
var arr = new Uint32Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint32Array([21, 31]);
var y = new Uint32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Uint32Array(buffer, 0, 4);

// From an iterable 
var iterable = function*(){ yield* [1,2,3]; }(); 
var uint32 = new Uint32Array(iterable);
// Uint32Array[1, 2, 3]