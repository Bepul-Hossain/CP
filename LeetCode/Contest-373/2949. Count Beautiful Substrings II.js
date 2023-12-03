var beautifulSubstrings = function (s, k) {
    const n = s.length;
    let i = 1;
    while (i * i % k !== 0) {
        i++;
    }

    const q = i * 2;
    const p = Array.from({ length: q }, () => ({}))
    p[q - 1][0] = 1;
    // console.log(p);
    let res = 0;
    let v = 0;

    for (let i = 0; i < n; i++) {
        v += 'aeiou'.includes(s[i]) ? 1 : -1;
        // console.log(v);
        res += p[i % q][v] || 0;
        p[i % q][v] = (p[i % q][v] || 0) + 1;
    }
    // console.log(p);

    return res;

}

console.log(beautifulSubstrings("baeyh", 2));