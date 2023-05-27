function MinHeap(nums) {
    this.values = [];
    for (let num of nums) {
        this.add(num);
    }
}

MinHeap.prototype.add = function (val) {
    this.values.push(val);
    let valIndex = this.values.length - 1;

    while (valIndex > 0) {
        const parentIndex = Math.floor((valIndex - 1) / 2);
        if (this.values[parentIndex] >= this.values[valIndex]) {
            const parent = this.values[parentIndex];

            this.values[parentIndex] = val;
            this.values[valIndex] = parent;
            valIndex = parentIndex;
        } else break;
    }
}

MinHeap.prototype.removeSmallest = function () {
    let currSmallest = this.values[0];
    let last = this.values.pop();
    this.values[0] = last;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];

    while (true) {
        let swap = null;
        const leftChildIndex = (index * 2) + 1;
        const rightChildIndex = (index * 2) + 2;

        let leftChild, rightChild;

        if (leftChildIndex < length) {
            leftChild = this.values[leftChildIndex];
            if (leftChild < current) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            if ((swap === null && rightChild < current) || (swap !== null && rightChild < leftChild))
                swap = rightChildIndex;
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = current;
        index = swap;
    }
    return currSmallest;
}

var KthLargest = function (k, nums) {
    this.heap = new MinHeap(nums);
    this.k = k;

    while (this.heap.values.length > k) {
        this.heap.removeSmallest();
    }
}


let obj = new KthLargest(3, [4, 5, 8, 2]);
let res = [];
obj.add(3);
obj.add(8);
obj.add(10);
console.log(obj);