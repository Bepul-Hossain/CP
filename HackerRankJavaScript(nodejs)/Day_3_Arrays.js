/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  //let secondlargest = nums[0];
  let second = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      second = largest;
      largest = nums[i];
    }
    if (nums[i] > second && nums[i] < largest) {
      second = nums[i];
    }
  }
  return second;
}
