const input = require("fs").readFileSync("../dev/file.txt", "utf8");
const lines = input.split("\n");
const T = parseInt(lines[0]);
var S;
var p, q;
for (let i = 0; i < T; i++) {
  S = lines[i + 1];
  p = S[0];

  for (let j = 2; j < S.length; j = j + 2) {
    p = p + S[j];
  }
  q = S[1];
  for (let j = 3; j < S.length; j = j + 2) {
    q = q + S[j];
  }
  console.log(p + " " + q);
}
