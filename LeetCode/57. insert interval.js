var insert = function (intervals, newInterval) {
    let res = [];
    let n = intervals.length;
    if (n === 0) return newInterval;
    let flag = false;
    for (let i = 0; i < n; i++) {

        const interval = intervals[i];
        // console.log(i);
        if (newInterval[0] >= interval[0] && newInterval[0] <= interval[1]) {
            newInterval[0] = interval[0];
            flag = true;
            continue;
        }
        else if (newInterval[1] >= interval[0] && newInterval[1] <= interval[1]) {
            newInterval[1] = interval[1];
            flag = true;
            continue;
        }
        else if (interval[0] >= newInterval[0] && interval[0] <= newInterval[1]) {
            continue;
        }
        else if (interval[1] >= newInterval[0] && interval[1] <= newInterval[1]) {
            continue;
        }
        if (flag === false) {
            res.push(interval);
        } else {
            res.push(newInterval);
            res.push(...intervals.slice(i));
            break;
        }

    }
    return res;
};

console.log(insert([[1, 3], [6, 9]], [2, 5]));