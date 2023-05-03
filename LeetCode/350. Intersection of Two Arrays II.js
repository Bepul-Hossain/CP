var intersect = function (nums1, nums2) {
    return nums1.filter((value) => {
        for (let i = 0; i < nums2.length; i++) {
            if (value === nums2[i]) {
                console.log(value);
                nums2.splice(i, 1)
                return value + "";
            }
        }
    });
};

console.log(intersect([8, 0, 3], [0, 0]));