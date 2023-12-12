var summaryRanges = function (nums) {
    if (!nums || nums.length === 0) {
        return [];
    }
    let res = [];
    let start = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1 || i === nums.length) {
            res.push(start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`)
            start = nums[i];
        }
    }
    return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7, 8, 10, 12, 14, 15]));