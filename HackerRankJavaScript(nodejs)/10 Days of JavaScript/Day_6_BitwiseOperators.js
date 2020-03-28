'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});


function getMaxLessThanK(n, k) {
    let s0 = 0,s,i,m;
        for (i = 1; i < n; i++)
        {
            for (m= i + 1; m <= n; m++)
            {
                s = i & (m);
                //cout<<i<<"&"<<m<<" "<<s<<endl;
                if (s < k)
                {
                    if (s > s0)
                    {
                        s0 = s;
                    }
                }
            }
        }
        return s0;
}

function readLine() {
    return inputString[currentLine++];
}
function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}