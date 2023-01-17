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
    //BFS
    bfs() {
        if (this.root === null) {
            return;
        }
        let queue = [this.root]

        while (queue.length > 0) {
            let currentNode = queue.shift()
            process.stdout.write(currentNode.value + ' ');
            if (currentNode.left === null && currentNode.right === null) {
                continue
            }
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
    }
}

const BST = new BinarySearchTree()
BST.insert(30)
BST.insert(10)
BST.insert(40)
BST.insert(15)
BST.insert(12)
BST.insert(35)
BST.insert(50)

console.dir(BST, { depth: null, color: true, maxArrayLength: null })
process.stdout.write("BFS: ");
BST.bfs();