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
        let newNode = createNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            } else {
                this.insertNode(currentNode.left, newNode)
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.insertNode(currentNode.right, newNode)
            }
        }
    }
}

const BST = new BinarySearchTree()
BST.insert(5)
BST.insert(4)
BST.insert(10)
BST.insert(50)
console.dir(BST, { depth: null, color: true, maxArrayLength: null })