/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
    let nums = Array(n).fill(0);
    let ans = [];
    let memo = 0;
    for (let i = 0; i < queries.length; i++) {
        let [index, color] = queries[i];

        if (index > 0 && index < n && nums[index] !== 0 && nums[index - 1] === nums[index]) {
            memo--;
        }
        if (index >= 0 && index < n - 1 && nums[index] !== 0 && nums[index + 1] === nums[index]) {
            memo--;
        }

        nums[index] = color;

        if (index > 0 && index < n && nums[index] !== 0 && nums[index - 1] === nums[index]) {
            memo++;
        }
        if (index >= 0 && index < n - 1 && nums[index] !== 0 && nums[index + 1] === nums[index]) {
            memo++;
        }
        ans.push(memo);

    }
    return ans;
};

console.log(colorTheArray(4, [[0, 2], [1, 2], [3, 1], [1, 1], [2, 1]]));