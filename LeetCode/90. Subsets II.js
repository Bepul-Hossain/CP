var subsetsWithDup = function (nums) {
    let res = [];
    const dfs = (i, nums, slate) => {
        //base case
        if (nums.length === i) {
            res.push(slate.slice())
            return
        }
        //recursion
        let num = nums[i]
        //exclude
        dfs(i + 1, nums, slate);
        //include
        slate.push(num);
        dfs(i + 1, nums, slate);
        slate.pop();
    }

    dfs(0, nums, []);
    const hash = {};
    for (let el of res) {
        let sortEl = el.sort((a, b) => a - b)
        if (hash[sortEl]) continue
        hash[sortEl] = el
    }

    return Object.values(hash);
};
console.log(subsetsWithDup([4, 4, 4, 1, 4]));