'use strict'

process.stdin.resume();
process.stdin.setEncoding('utf8')

var inputString='';
var currentLine=0;
process.stdin.once('data',(inputStdin)=>{
    process.stdout.write('ok')
    inputString=inputString+inputStdin;
})
process.stdin.once('data',(inputStdin)=>{
    process.stdout.write('ok2')
    inputString=inputString+inputStdin;
})

process.stdin.on('end', ()=>{
    inputString = inputString.trim().split('\n').map(string=>{
        return string.trim();
    })
    main();
})

function readline(){
    return inputString[currentLine++];
}

function main(){
    var x=Array(500),r=Array(500), a,c,m;
    console.log('ok');
    process.stdout.write("ok")
    // x[i+1]=a*x[i]+c;
    // r[i]=x[i]/m
}