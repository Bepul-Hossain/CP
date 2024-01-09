/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function (nums) {
  let n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      count++;
    }
    if (count > 1) return true;
  }
  return false;
};

console.log(hasTrailingZeros([1, 3, 5, 7, 9]));
