const maxSubArrSum = (nums) => {
    let maxSum = 0;
    let curSum = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {

        curSum = curSum + nums[i];
        if (nums[i] > max) {
            max = nums[i];
        }
        if (curSum > maxSum) maxSum = curSum;
        if (curSum < 0) curSum = 0;
    }

    if (maxSum === 0) {
        maxSum = max;
    }
    return maxSum;
}

console.log(maxSubArrSum([-2, -3, -4, -1, -2, -1, -5, -3]));