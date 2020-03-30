const prompt=require('prompt-sync')({sigint:true})
let R=prompt();
let n=3.14159;
let A=(n*R*R).toFixed(4);
console.log("A="+A);
console.log();