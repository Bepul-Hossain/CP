var permute = function (nums) {
    let res = [];
    const dfs = (i, nums) => {
        //base case
        if (i === nums.length) {
            return res.push(nums.slice())
        }
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    dfs(0, nums)
    return res
};
console.log(permute([1, 2, 3]));