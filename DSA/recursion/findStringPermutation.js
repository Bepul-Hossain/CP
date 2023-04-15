const findStringPermutation = (string) => {
    if (!string || typeof string != 'string') {
        return "please enter string";
    } else if (string.length < 2) return string;
    let permutationArr = []
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (string.indexOf(char) !== i) continue;
        let remainSubArr = string.slice(0, i) + string.slice(i + 1);

        for (let permutation of findStringPermutation(remainSubArr)) {
            permutationArr.push(char + permutation)
        }

    }
    return permutationArr;
}
console.log(findStringPermutation("abb"));
console.log(findStringPermutation("abc"));