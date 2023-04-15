function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

class List {

}

var inorderTraversal = function (root) {
    let number = [];
    inOrder(root)
    function inOrder(root) {
        if (!root) {
            return;
        }
        inOrder(root.left);
        number.push(root.val);
        inOrder(root.right);
    }
    return number;
};

console.log(inorderTraversal([1, null, 2, 3]));