const prompt = require("prompt-sync")({ sigint: true });
const N = Number(prompt());
if (N % 2 == 1 || (N >= 6 && N <= 20)) {
  console.log("Weird");
} else {
  console.log("Not Weird");
}