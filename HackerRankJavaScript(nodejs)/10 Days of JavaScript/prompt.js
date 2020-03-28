const prompt = require('prompt-sync')({sigint:true});

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

const num=Number(prompt('enter a number '));
for(let i=0; i<num; i++){
    console.log('i = '+i+' '+(num+5.5));
}
