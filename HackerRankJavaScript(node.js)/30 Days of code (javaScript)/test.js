const input = require("fs").readFileSync("dev/file.txt", "utf8");
const lines = input.split("\n");
const n = parseInt(lines[0]);
const addressBook = new Map();
for (let i = 1; i <= n; i++) {
  const entry = lines[i].split(" ");
  addressBook.set(entry[0], entry[1]);
}
for (let i = n + 1; i < lines.length; i++) {
  const entry = lines[i];
  const value = addressBook.get(entry);
  if (value) {
    console.log(`${entry}=${value}`);
  } else {
    console.log("Not found");
  }
}
