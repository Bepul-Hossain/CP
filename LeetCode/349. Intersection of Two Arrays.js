var intersection = function (nums1, nums2) {
    let hash = {};
    let set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = nums1[i];
    }
    for (let j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]] === nums2[j]) {
            set.add(nums2[j]);
        }
    }
    return [...set];
};
console.log(intersection([1, 2, 2, 1], [2, 2]));