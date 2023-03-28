function createNode(value) {
    return {
        value: value,
        left: null,
        right: null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = createNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertLeftOrRight(this.root, newNode);
        }
    }
    insertLeftOrRight(parent, newNode) {
        if (parent.value > newNode.value) {
            //left node
            if (parent.left === null) {
                parent.left = newNode
            } else {
                this.insertLeftOrRight(parent.left, newNode)
            }
        }
        else {
            //right node
            if (parent.right === null) {
                parent.right = newNode
            } else {
                this.insertLeftOrRight(parent.right, newNode);
            }
        }
    }
    //In-order traversal order: left, parent, right
    inOrder(root = this.root) {
        if (root === null) {
            return;
        }
        this.inOrder(root.left)
        process.stdout.write(root.value + ' ');
        this.inOrder(root.right)
    }
    //Post-order traversal order: left, right, parent
    postOrder(root = this.root) {
        if (root === null) {
            return;
        }
        this.postOrder(root.left)
        this.postOrder(root.right)
        process.stdout.write(root.value + ' ');

    }
    //pre-order traversal order: parent, left, right
    preOrder(root = this.root) {
        if (root === null) {
            return;
        }
        process.stdout.write(root.value + ' ');
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
}
const BST = new BinarySearchTree()
BST.insert(25);
BST.insert(36);
BST.insert(20);
BST.insert(10);
BST.insert(22);
BST.insert(30);
BST.insert(40);

console.dir(BST, { depth: null, color: true, arrMaxLength: null })
process.stdout.write("In order: left->root->right : ");
BST.inOrder();
process.stdout.write("\nPost order: left->right->root: ");
BST.postOrder()
process.stdout.write("\nPre order: root->left->right: ");
BST.preOrder()
