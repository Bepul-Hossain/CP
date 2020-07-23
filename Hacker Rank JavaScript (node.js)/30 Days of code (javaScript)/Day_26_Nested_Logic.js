function processData(input) {
  //Enter your code here
  const data = input.split("\n");
  const returnDate = data[0].split(" ").map(Number);
  const expectedDate = data[1].split(" ").map(Number);
  if (returnDate[2] - expectedDate[2] > 0) {
    console.log("10000");
  } else if (returnDate[2] < expectedDate[2]) {
    console.log("0");
  } else if (returnDate[1] > expectedDate[1]) {
    console.log((returnDate[1] - expectedDate[1]) * 500);
  } else if (returnDate[1] < expectedDate[1]) {
    console.log("0");
  } else if (returnDate[0] > expectedDate[0]) {
    console.log((returnDate[0] - expectedDate[0]) * 15);
  } else if (returnDate[0] < expectedDate[0]) {
    console.log("0");
  } else {
    console.log("0");
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
