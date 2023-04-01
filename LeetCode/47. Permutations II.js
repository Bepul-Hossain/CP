var permuteUnique = function (nums) {
    let res = [];
    const dfs = (i, nums) => {
        //base case
        if (i === nums.length) {
            return res.push(nums.slice())
        }
        //recursion
        for (let j = i; j < nums.length; j++) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            dfs(i + 1, nums);
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    dfs(0, nums);

    const hash = {};
    for (let el of res) {
        if (hash[el] = el) continue
        hash[el] = el
    }
    return Object.values(hash);
};
console.log(permuteUnique([1, 2, 2]));