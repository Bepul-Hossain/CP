function decodeString(s: string): string {

    const stack: [number, string][] = [];
    let curStr = "";
    let curMul = 0;

    for (let char of s) {
        if (char === '[') {
            stack.push([curMul, curStr])
            curStr = "";
            curMul = 0;
        } else if (char === ']') {
            const [prevMul, prevStr] = stack.pop()!; //non-null assertion operator (!) to assert that the stack is not empty
            curStr = prevStr + curStr.repeat(prevMul);
        } else if (!isNaN(Number(char))) {
            curMul = curMul * 10 + Number(char);
        } else {
            curStr = curStr + char;
        }

    }
    return curStr;
};

console.log(decodeString("2[abc]3[cd]ef"));
