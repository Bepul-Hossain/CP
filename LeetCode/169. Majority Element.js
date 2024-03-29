/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    let res = 0, maxVal = 0;
    Object.entries(hash).forEach((item) => {
        let [key, value] = item;
        if (value > maxVal) {
            maxVal = value;
            res = key;
        }
    })
    return res;
};
console.log(majorityElement([2, 2, 1, 1, 2, 2]));