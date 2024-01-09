// const root = {
//   value: 4,
//   left: {
//     value: 2,
//     left: {
//       value: 1,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     value: 7,
//     left: {
//       value: 6,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 9,
//       left: null,
//       right: null,
//     },
//   },
// };

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// /**
//  * @param {number[]} arr
//  * @return {TreeNode}
//  */

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function insertNode(root, value) {
  if (root === null) {
    return new TreeNode(value);
  }

  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else if (value > root.value) {
    root.right = insertNode(root.right, value);
  }

  return root;
}

function arrayToBST(arr) {
  if (arr.length === 0) {
    return null;
  }

  let root = null;
  for (let i = 0; i < arr.length; i++) {
    root = insertNode(root, arr[i]);
  }

  return root;
}

// Given array
const arr = [4, 2, 7, 1, 3, 6, 9];

// Convert array to BST
const root = arrayToBST(arr);

// Output the BST
console.log(root);
