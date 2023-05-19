/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let dp = Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    let p = dp.reduce((a, b) => Math.max(a, b), 1);
    return p;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 120, 18]));