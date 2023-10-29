function rec(num, sum = 0) {
    if (num == 0) {
        console.log(sum);
        return sum;
    }
    else {
        return rec(num - 1, sum + num);
    }
}

console.log(rec(10000));