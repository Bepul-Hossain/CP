var combinationSum3 = function (k, n) {
    const res = [];

    const dfs = (i, k, slate) => {
        //back track
        if (slate.length > k) return;
        //base case
        if (slate.length === k) {
            const subArraySum = slate.reduce((a, b) => { return a + b });
            if (n === subArraySum) {
                res.push(slate.slice());
            }
            return;
        }
        // recursion
        for (let j = i; j < 9; j++) {
            slate.push(j + 1)
            dfs(j + 1, k, slate);
            slate.pop();
        }
    }

    dfs(0, k, []);

    return res;
};
console.log(combinationSum3(3, 9));