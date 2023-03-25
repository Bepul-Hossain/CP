const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
var missingNumber = function (nums) {
    let len = nums.length;
    let res = 0;
    for (let i = 0; i <= len; i++) {
        res = res ^ i ^ nums[i]
    }
    return res;
};

console.log(missingNumber(nums));