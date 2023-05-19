/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sortNums = nums.sort((a, b) => a - b);
    let n = sortNums.length - 1;
    let res = [];

    for (let i = 0; i <= n; i++) {
        if (i > 0 && sortNums[i - 1] === sortNums[i]) {
            continue;
        }

        let start = i + 1;
        let end = n;

        while (start < end) {
            let sum = sortNums[i] + sortNums[start] + sortNums[end];
            if (sum > 0) {
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                res.push([sortNums[i], sortNums[start], sortNums[end]]);
                start++;
                while (sortNums[start] === sortNums[start - 1] && start < end) {
                    start++;
                }
            }
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));