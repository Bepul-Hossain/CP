let n = 21

console.log(5 >> 1);

var reverseBits = function (n, bit = 0) {
    for (let i = 0; i < 32; i++) {
        bit = bit << 1 // Double
        bit = bit | (n & 1) // check last bit of n
        n = n >> 1 // Half

    }
    return bit >>> 0
};
console.log(reverseBits(n))