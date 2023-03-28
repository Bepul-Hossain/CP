//https://levelup.gitconnected.com/deletion-in-binary-search-tree-with-javascript-fded82e1791c
function createNode(value) {
    return {
        value: value,
        left: null,
        right: null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = createNode(value)
        if (this.root) {
            this.insertLeftOrRight(this.root, newNode)
            return
        }
        this.root = newNode
        return
    }
    insertLeftOrRight(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            //left chile
            if (currentNode.left === null) {
                currentNode.left = newNode
            }
            else {
                this.insertLeftOrRight(currentNode.left, newNode)
            }
        }
        else {
            //right child
            if (currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.insertLeftOrRight(currentNode.right, newNode);
            }
        }
    }
    remove(value) {
        this.removeNode(this.root, value)
    }
    removeNode(currentNode, value) {
        // base case, if the tree is empty 
        if (currentNode === null) {
            return null
        }
        // when value is the same as current's value, this is the node to be deleted
        if (value === currentNode.value) {
            // for case 1 and 2, node without child or with one child
            if (currentNode.left === null && currentNode.right === null) {
                return null
            } else if (currentNode.left === null) {
                return currentNode.right
            } else if (currentNode.right === null) {
                return currentNode.left
            } else {
                // node with two children, get the inorder successor, 
                //smallest in the right subtree
                let tmpNode = this.kthSmallestNode(currentNode.right);
                currentNode.value = tmpNode.value
                /// delete the inorder successor
                currentNode.right = this.removeNode(currentNode.right, tmpNode.value)
                return currentNode
            }
        }
        else if (value < currentNode.value) {
            currentNode.left = this.removeNode(currentNode.left, value)

            console.log("=========");
            console.log(currentNode);
            return currentNode
        } else {
            currentNode.right = this.removeNode(currentNode.right, value)
            return currentNode
        }
    }
    // helper function to find the smallest node
    kthSmallestNode(node) {
        while (!node.left === null) {
            node = node.left
        }
        return node
    }
}

const BST = new BinarySearchTree()
BST.insert(30)
BST.insert(10)
BST.insert(40)
BST.insert(35)
BST.insert(50)
BST.insert(15)
BST.insert(12)

BST.remove(40)
// BST.remove(10)

console.dir(BST, { depth: null, color: true, maxArraySize: null });