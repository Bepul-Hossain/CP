const prompt=require('prompt-sync')({sigint:true})
const R=Number(prompt());
const pi=3.14159;
console.log("VOLUME = "+((4.0/3) * pi * R*R*R).toFixed(3));

