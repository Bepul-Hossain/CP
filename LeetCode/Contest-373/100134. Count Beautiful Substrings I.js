var beautifulSubstrings = function (s, k) {
    let n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let vCount = 0;
        let cCount = 0;

        for (let j = i; j < n; j++) {
            if ('aeiou'.includes(s[j])) {
                vCount++
            } else {
                cCount++;
            }

            if (cCount === vCount && (cCount * vCount) % k === 0) {
                res++;
            }
        }
    }
    return res;
};

console.log(beautifulSubstrings("baeyh", 2));
