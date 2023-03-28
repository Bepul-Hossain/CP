function createNode(value) {
    return {
        value: value,
        left: null,
        right: null,
        height: 1
    }
}

class AVLTree {
    constructor() {
        this.root = null
    }
    height(N) {
        if (N === null) {
            return 0;
        }
        return N.height;
    }
    // get balance factor of a node
    getBalanceFactor(N) {
        if (N === null) {
            return 0;
        }
        console.log("++++++++++++++++");
        console.dir(N, { depth: null, color: true, maxArr: null });
        return this.height(N.left) - this.height(N.right)
    }

    insert(value) {
        let newNode = createNode(value)
        if (this.root !== null) {
            this.insertNodeHelper(newNode, this.root)
            return
        }
        this.root = newNode
        return
    }
    insertNodeHelper(newNode, currentNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            } else {
                this.insertNodeHelper(newNode, currentNode.left)
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode
            }
            else {
                this.insertNodeHelper(newNode, currentNode.right)
            }
        }
        currentNode.height = 1 + Math.max(this.height(currentNode.left), this.height(currentNode.right))
        console.log(currentNode);
        let balanceFactor = this.getBalanceFactor(currentNode);
        console.log(balanceFactor);
        // if (balanceFactor > 1) {
        //     if (newNode.value < currentNode.left.value) {
        //         this
        //     }
        // }
    }
    // update the balance factor of each node and, balance the tree

    //in-order
    printInOrder(currentNode = this.root) {
        if (currentNode === null) {
            return
        }
        // console.log(currentNode.value)
        this.printInOrder(currentNode.left)
        this.printInOrder(currentNode.right)
    }
}

let tree = new AVLTree()
tree.insert(30);
tree.insert(20);
tree.insert(10);
tree.insert(35);
// console.dir(tree, { depth: null, color: null });
// tree.printInOrder()