'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let magazineobj={};
    let noteobj={};
    let lenm=magazine.length;
    let lenn=note.length;
    for(let i=0; i<lenm; i++){
       // console.log("magazine i "+i+magazine[i]);     
        if(magazineobj[magazine[i]]==undefined){
            magazineobj[magazine[i]]=1;
        }else{
            magazineobj[magazine[i]]++;
        }
       // console.log("mag "+magazineobj[magazine[i]]);
    }
    var count=0;
    for(let j=0; j<lenn; j++){
      if(noteobj[note[j]]==undefined){
          noteobj[note[j]]=1;
          count++
      }else{
          noteobj[note[j]]++;
      }   
    }
    for(let j=0; j<count; j++){
          if(magazineobj[note[j]]==undefined){
            console.log("No");
            return;
          }
          if(noteobj[note[j]]>magazineobj[note[j]]){
              console.log("No");
             return;
          }
    }
   // noteobj[]
    console.log("Yes");
    return;
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
