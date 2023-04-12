var removeDuplicates = function (nums) {
    let [left, right] = [0, 0];
    while (right < nums.length) {
        let [leftVal, rightVal] = [nums[left], nums[right]]
        const isEqual = (leftVal === rightVal);

        if (!isEqual) {
            left++;
            nums[left] = rightVal;
        }
        right++;
    }
    return left + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));