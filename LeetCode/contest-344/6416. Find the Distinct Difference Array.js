var distinctDifferenceArray = function (nums) {
    let n = nums.length;
    let set1 = new Set();
    let set2 = new Set();
    let res = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            set1.add(nums[j]);
        }
        for (let j = i + 1; j < n; j++) {
            set2.add(nums[j])
        }
        let def = set1.size - set2.size;
        res.push(def);
        set1.clear();
        set2.clear();
    }
    return res;
};

console.log(distinctDifferenceArray([3]));