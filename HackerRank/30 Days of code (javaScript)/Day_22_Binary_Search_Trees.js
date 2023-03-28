// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function getHeight
  this.getHeight = function (root) {
    // Add your code here
    if (root.left == null && root.right == null) {
      return 0;
    } else {
      var nodes = [];
      nodes.push(root);
      var height = -1;
      while (nodes.length > 0) {
        var length = nodes.length;
        for (var i = 0; i < length; i++) {
          if (nodes[0].left != null) {
              nodes.push(nodes[0].left)
             // console.log(nodes);
            };
          if (nodes[0].right != null) nodes.push(nodes[0].right);

          nodes.splice(0, 1);
        }
        height++;
      }
      return height;
    }
  }; // End of function getHeight
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function (data) {
  _input += data;
});

process.stdin.on("end", function () {
  var tree = new BinarySearchTree();
  var root = null;

  var values = _input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  console.log(tree.getHeight(root));
});
