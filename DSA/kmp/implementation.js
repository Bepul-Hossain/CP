//https://gist.github.com/blasten/d42bd0d814b7df1addea
const kmp = (str, pattern) => {
    //Begin to create the prefix or lps table
    let lps = Array(pattern.length);
    lps[0] = 0;
    let prefix = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (prefix > 0 && pattern[prefix] !== pattern[i]) {
            prefix = lps[prefix - 1];
        }
        if (pattern[prefix] === pattern[i]) {
            prefix++;
        }
        lps[i] = prefix;
    }
    //End to the creation of lps table


    let matches = [];
    let j = 0; // `j` is the index in pattern
    let i = 0; // `i` is the index in str
    while (i < str.length) {
        // Case 1.  str[i] == pattern[j] so we move to the next index in str and pattern
        if (str[i] === pattern[j]) {
            i++;
            j++;
        }
        // Case 2.  `j` is equal to the length of pattern
        // that means that we reached the end of pattern and thus we found a match
        if (j === pattern.length) {
            matches.push(i - j);
            // Next we have to update `j` because we want to save some time
            // instead of updating to j = 0 , we can jump to the last character of the longest prefix well known so far.
            // j-1 means the last character of pattern because j is actually `pattern.length`
            // e.g.
            // S =  a b a b d e
            // P = `a b`a b
            // we will jump to `a b` and we will compare d and a in the next iteration
            // a b a b `d` e
            //     a b `a` b
            j = lps[j - 1];
        }
        // Case 3.
        // str[i] != pattern[j] There's a mismatch!
        else if (str.charAt(i) !== pattern.charAt(j)) {
            // if we have found at least a character in common, do the same thing as in case 2
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                // otherwise, j = 0, and we can move to the next character S[i+1]
                i++;
            }
        }
    }

    return matches;
}

console.log(kmp("ababcabcabababd", "ababd"));