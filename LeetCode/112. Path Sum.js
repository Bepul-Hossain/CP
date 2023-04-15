function TreeNode(val, left, right) {
    return {
        val: (val === undefined ? 0 : val),
        left: (left === undefined ? null : left),
        right: (right === undefined ? null : right)

    }
}

let root = TreeNode(5, TreeNode(4, TreeNode(11, TreeNode(7), TreeNode(11))), TreeNode(8, TreeNode(13), TreeNode(4, null, TreeNode(1))));

// console.log(JSON.stringify(List, null, 4));

var hasPathSum = function (root, targetSum, memo = {}) {
    if (!root) return false;
    while (root) {
        if (root.val > targetSum) {
            return false;
        } else if (root.val === targetSum) {
            return true;
        }
        else {
            targetSum = targetSum - root.val;
        }
        root = root.left;
    }
};
console.log(hasPathSum(root, 22));