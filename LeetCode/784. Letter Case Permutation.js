var letterCasePermutation = function (s) {
    const result = [];

    const dfs = (i, s, slate) => {
        //base case 
        if (i === s.length) {
            // console.log(slate);
            result.push(slate.join(''))
            return;
        }
        //dfs recursive case
        let char = s[i];
        if (!Number.isInteger(parseInt(char))) {
            //upper case
            slate.push(char.toLowerCase())
            dfs(i + 1, s, slate)
            slate.pop();
            //lower case
            slate.push(char.toUpperCase())
            dfs(i + 1, s, slate)
            slate.pop();
        } else {
            slate.push(char)
            dfs(i + 1, s, slate)
            slate.pop();
        }
    }
    dfs(0, s, [])
    return result;
};


console.log(letterCasePermutation("a1b2"));