/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {

    let sum = 0;
    let curMax = 0;
    let curMin = 0;
    let maxSubArrSum = nums[0];
    let minSubArrSum = nums[0];

    for (let num of nums) {
        sum += num;

        curMax = Math.max(curMax, 0) + num;
        maxSubArrSum = Math.max(maxSubArrSum, curMax);

        curMin = Math.min(curMin, 0) + num;
        minSubArrSum = Math.min(minSubArrSum, curMin);
    }

    return sum === minSubArrSum ? maxSubArrSum : Math.max(maxSubArrSum, sum - minSubArrSum);

};

console.log(maxSubarraySumCircular([5, -3, 5]));