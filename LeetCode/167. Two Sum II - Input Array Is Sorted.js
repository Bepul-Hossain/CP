/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    const binarySearch = (start, end, newTarget) => {
        if (start > end) return -1;

        let mid = Math.floor((start + end) / 2);

        if (numbers[mid] === newTarget) {
            return mid;
        }
        else if (numbers[mid] > newTarget) {
            return binarySearch(start, mid - 1, newTarget);
        } else if (numbers[mid] < newTarget) {
            return binarySearch(mid + 1, end, newTarget);
        }
    };

    for (let i = 0; i < numbers.length; i++) {
        const newTarget = target - numbers[i];

        const i2 = binarySearch(i + 1, numbers.length - 1, newTarget);
        if (i2 !== -1) {
            return [i + 1, i2 + 1];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));