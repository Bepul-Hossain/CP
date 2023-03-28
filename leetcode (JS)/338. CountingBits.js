var countBits = function (n, dp = [0]) {
    for (let i = 1; i < (n + 1); i++) {
        const [mid, bit] = [(i >> 1), (i & 1)]
        bits = dp[mid] + bit;
        dp.push(bits)
    }
    return dp;
};

console.log(countBits(5));