// https://dev.to/fernandoblima/disjoint-set-data-structure-part-iv-48e4
class createDisjointNode {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.rank = 1;
        this.parent = -1;
    }
}

class DisJointSet {
    constructor() {
        this.list = {}
        this.size = 0;
    }
    init(size) {
        this.size = size
        for (var i = 0; i < this.size; i++) {
            var disJointSetNode = new createDisjointNode(i)
            this.list[i] = disJointSetNode
        }
    }
    findRoot(x) {
        if (this.list[x] && this.list[x].parent !== -1) {
            return this.findRoot(this.list[x].parent)
        }
        else {
            return this.list[x]
        }
    }
    union(x, y) {
        var xRoot = this.findRoot(x)
        var yRoot = this.findRoot(y)
        yRoot.parent = -1;
        yRoot.children[xRoot.value] = xRoot
        xRoot.parent = yRoot.value
    }
    isConnected(value1, value2) {
        if (this.findRoot(value1).value == this.findRoot(value2).value)
            return true;
        return false;
    }
}

let disJointSet = new DisJointSet();

disJointSet.init(10);
disJointSet.union(2, 1);
disJointSet.union(2, 3)
disJointSet.union(3, 4)
disJointSet.union(5, 4)
disJointSet.union(4, 6)
console.log(disJointSet.isConnected(0, 1))
// console.dir(disJointSet, { depth: null, color: true, maxArr: null });