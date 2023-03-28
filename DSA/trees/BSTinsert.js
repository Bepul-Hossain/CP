class createNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new createNode(value)
        if (this.root !== null) {
            this.insertNode(this.root, newNode)
        } else {
            this.root = newNode
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            //left node 
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            //right node
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

const BST = new BinarySearchTree();
BST.insert(25);
BST.insert(20);
BST.insert(36);
BST.insert(10);
BST.insert(22);
BST.insert(30);
BST.insert(40);
BST.insert(77);
console.dir(BST, { depth: null, colors: true, maxArrayLength: null })
