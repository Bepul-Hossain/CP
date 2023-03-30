const highest3numMultiplication = (numbers) => {
    let nums = numbers.sort((a, b) => a - b);
    let length = numbers.length;
    let num1 = nums[0] * nums[1] * nums[length - 1]
    let num2 = nums[length - 1] * nums[length - 2] * nums[length - 3]


    return Math.max(num1, num2)
}

console.log(highest3numMultiplication([-5, -2, -1, 0, 0, 3, 4, 5]));