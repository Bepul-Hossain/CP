var maxSubArray = function (nums) {
    let maxSubArray = nums[0]
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currentSum < 0) currentSum = 0;

        currentSum = currentSum + nums[i];

        if (maxSubArray < currentSum) {
            maxSubArray = currentSum;
        }
    }
    return maxSubArray;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));