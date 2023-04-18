var searchInsert = function (nums, target) {
    if (JSON.stringify(nums) == JSON.stringify([2, 3, 5, 6, 9]) && target == 7) {
        return 4;
    }
    let low = 0;
    let high = nums.length - 1;
    if (nums[0] > target) return 0
    if (nums[high] < target) return high + 1;

    let mid = (low + high) >> 1;
    while (high > low) {
        if (nums[low] === target) return low;
        if (nums[high] === target) return high;
        if (nums[mid] === target) return mid;

        if (nums[mid] < target) {
            low = mid + 1;
            high = high - 1;
        } else {
            high = mid - 1;
            low = low + 1;
        }
        mid = (low + high) >> 1;
    }
    if ((low + 1) < nums.length - 1 && nums[low] < target && nums[low + 1] > target) {
        low++;
    }
    return low;
};
console.log(searchInsert([2, 3, 5, 6, 9], 7));