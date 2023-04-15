/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let stack = [];
    for (let i = 0; i < operations.length; i++) {
        let length = stack.length
        if (operations[i] === "+") {
            stack.push(Number(stack[length - 1]) + Number(stack[length - 2]))
        } else if (operations[i] === "D") {
            stack.push(2 * Number(stack[length - 1]))
        } else if (operations[i] === "C") {
            stack.pop();
        } else {
            stack.push(operations[i])
        }
    }
    return stack.reduce((a, b) => Number(a) + Number(b), 0);
};
console.log(calPoints(["5", "2", "C", "D", "+"]));