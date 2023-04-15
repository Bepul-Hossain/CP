
var hammingDistance = function (x, y) {
    let binary_x = x.toString(2).padStart(32, "0");
    let binary_y = y.toString(2).padStart(32, "0");

    console.log(binary_x);
    console.log(binary_y);
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if (binary_x[i] !== binary_y[i]) {
            count++;
        }
    }

    return count;
};

console.log(hammingDistance(1, 4));