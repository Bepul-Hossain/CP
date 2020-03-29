// Declare second integer, double, and String variables.
var i2
var d2
var s2

// Read and save an integer, double, and String to your variables.
i2 = Number(readLine())
d2 = parseFloat(readLine())
s2 = readLine()

// Print the sum of both integer variables on a new line.
process.stdout.write(i + i2 + '\n');

// Print the sum of the double variables on a new line.
process.stdout.write((d + d2).toFixed(1) + '\n');

// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
process.stdout.write(s + s2 + '\n');