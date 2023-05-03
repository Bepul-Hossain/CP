var searchRange = function (nums, target) {
    let res = [-1, -1];
    let targetIndex = binarySearch(nums, target, start = 0, end = nums.length - 1);
    if (targetIndex !== -1) {
        let j = targetIndex, k = targetIndex;
        while (nums[j] === target) {
            j--;
        }
        while (nums[k] === target) {
            k++;
        }
        res[0] = ++j;
        res[1] = --k;
    }
    return res;
};
var binarySearch = (nums, target, start = 0, end) => {
    if (end < start) return -1;

    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
        return binarySearch(nums, target, mid + 1, end)
    } else {
        return binarySearch(nums, target, start, mid - 1);
    }
}
console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10], 14));