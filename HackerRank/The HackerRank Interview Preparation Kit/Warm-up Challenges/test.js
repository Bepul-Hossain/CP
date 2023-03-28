//cat input.txt | node Counting_Valleys.js > output.txt
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    readLine(); // We don't really care about the number of socks.
    let colors = readLine().split(' ');
    let pairedSocks = 0;
    let unpairedColors = {}
    
    colors.forEach(c => {
        if (unpairedColors[c]) {
            delete unpairedColors[c];
            pairedSocks++;
        } else {
            unpairedColors[c] = true;
        }        
    })
    
    console.log(pairedSocks);
    return pairedSocks;
}
