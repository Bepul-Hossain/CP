var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    return n === (4 ** Math.floor(Math.log(n) / Math.log(4)));
};
console.log(isPowerOfFour(-64));