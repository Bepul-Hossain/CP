//this code got time limit
var distance = function (nums) {

    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        let value = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                let tmp;
                if ((i - j) > 0) {
                    tmp = i - j;
                } else {
                    tmp = j - i;
                }
                value = value + tmp;
            }
        }
        arr.push(value)
    }
    return arr
};
//this code got time limit
console.log(distance([1, 3, 1, 1, 2]));