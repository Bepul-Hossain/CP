var addMinimum = function (word) {
    let count = 0;
    for (let i = 0; i < word.length;) {
        //a
        if (word[i] === 'a') {
            //a/c
            if (word[i + 1] === undefined || word[i + 1] === 'a' || word[i + 1] === 'c') {
                count = count + 2;
                i++;
            }
            //b
            else if (word[i + 1] === 'b') {
                //a
                if (word[i + 2] === undefined || word[i + 2] === 'a' || word[i + 2] === 'b') {
                    count++;
                    i = i + 2;
                }
                else {
                    i = i + 3;
                }
            }
        }
        else if (word[i] === 'b') {
            if (word[i + 1] === undefined || word[i + 1] === 'b' || word[i + 1] === 'a') {
                count = count + 2;
                i++;
            }
            else if (word[i + 1] === 'c') {
                i = i + 2;
                count = count + 1;
            }

        } else {
            i = i + 1;
            count = count + 2;
        }


    }
    return count;
};
console.log(addMinimum("aaa"));