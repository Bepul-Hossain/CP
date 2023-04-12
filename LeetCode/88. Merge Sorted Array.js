var merge = function (nums1, m, nums2, n) {
    let k = m + n - 1;
    m = m - 1;
    n = n - 1;

    while (n >= 0 && m >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n]
            n--;
        }
        k--;
    }
    while (n >= 0) {
        nums1[k] = nums2[n];
        k--;
        n--;
    }
};
console.log(merge([1], 1, [], 0));