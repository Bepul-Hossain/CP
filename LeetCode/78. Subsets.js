var subsets = function (nums) {
    let result = [];
    const dfs = (i, nums, slate) => {
        // base case
        if (i === nums.length) {
            return result.push(slate.slice())
        }
        //recursion
        let num = nums[i];
        dfs(i + 1, nums, slate);
        slate.push(num);
        dfs(i + 1, nums, slate);
        slate.pop();
    }
    dfs(0, nums, [])
    return result
};
console.log(subsets([1, 2, 3]));