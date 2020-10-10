process.stdout.write("write something\n");
process.stdin.resume();
process.stdin.once("data", (res) => {
  console.log("Your write "+res.toString().trim());
 
});
