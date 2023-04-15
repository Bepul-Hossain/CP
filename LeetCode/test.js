/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (root === null) return [];
    let number = [];
    let stack = [];
    let current = root;
    stack.push(current);
    while (current !== null && stack.length > 0) {
        stack.push(current);
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        number.push(current.val);
        current = current.right;
    }
    return number;
};