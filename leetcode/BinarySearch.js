let nums = [-1, 0, 3, 5, 9, 12], target = 9;

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (high >= low) {
        const mid = (low + high) >> 1;
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;

};

var p = search(nums, target);
console.log(p);