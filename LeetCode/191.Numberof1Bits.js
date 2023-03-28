const n = 00000000000000000000000000001011;

var hammingWeight = function (n) {
    let res = 0;
    while (n) {
        n = n & (n - 1);
        res++;
    }
    return res;
};

console.log(n);
console.log(hammingWeight(n))