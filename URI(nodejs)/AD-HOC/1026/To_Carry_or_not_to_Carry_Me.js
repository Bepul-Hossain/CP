const prompt = require("prompt-sync")({ sigint: true });
while ((line = prompt())) {
  const input = line.split(" ");
  const A = input[0];
  const B = input[1];
  console.log(A ^ B);
}
// const prompt = require("prompt-sync")({ sigint: true });
// while ((line = prompt())) {
//   const input = line.split(" ");
//   const A = input[0];
//   const B = input[1];
//   console.log(A ^ B);
// }
