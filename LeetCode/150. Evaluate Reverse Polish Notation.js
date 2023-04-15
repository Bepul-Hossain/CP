/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i <= tokens.length; i++) {
        if (tokens.length < 3) return tokens[0];
        let num1, num2;
        if (tokens[i] === "+") {
            num1 = stack.pop();
            num2 = stack.pop();
            stack.push(Number(num1) + Number(num2))
        } else if (tokens[i] === "-") {
            num2 = stack.pop();
            num1 = stack.pop();
            stack.push(Number(num1) - Number(num2))
        }
        else if (tokens[i] === "*") {
            num1 = stack.pop();
            num2 = stack.pop();
            stack.push(Number(num1) * Number(num2))
        } else if (tokens[i] === "/") {
            num2 = stack.pop();
            num1 = stack.pop();
            if ((Number(num1) === 0 || Number(num2) === 0)) {
                stack.push(0)
            } else {
                stack.push(parseInt(Number(num1) / Number(num2)))
            }
        }
        else {
            stack.push(tokens[i])
        }


    }
    return stack[0];
};

console.log(evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]));