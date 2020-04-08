process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  var line = input.split("");
  var countO = 0,
    countZ = 0;
  for (let i = 0; i < line.length; i++) {
    if (input[i] == "z") {
      countZ++;
    } else if (input[i] == "o") {
      countO++;
    }
  }

  if (countO == (2*countZ)) {
    process.stdout.write("Yes" + "\n");
  } else {
    process.stdout.write("No" + "\n");
  }
}
