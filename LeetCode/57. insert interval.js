var insert = function (intervals, newInterval) {
    let res = [];
    let n = intervals.length;
    let flag = true;
    for (let i = 0; i < n; i++) {

        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval, ...intervals.slice(i));
            flag = false;
            break;
        }

        else if (newInterval[0] > intervals[i][1]) {
            res.push(intervals[i])
        }

        else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }
    if (flag) {
        res.push(newInterval);
    }
    return res;
};

console.log(insert([[2, 5], [6, 7], [8, 9]], [0, 1]));