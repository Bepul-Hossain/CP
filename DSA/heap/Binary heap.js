class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
        return (i * 2) + 1
    }
    getRightChildIndex(i) {
        return (i * 2) + 2
    }
    swap(i1, i2) {
        const tmp = this.data[i1]
        this.data[i1] = this.data[i2];
        this.data[i2] = tmp;
    }

    push(key) {
        this.data[this.data.length] = key;
        this.heapifyUp();
    }
    heapifyUp() {
        let currentIndex = this.data.length - 1;
        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    poll() {
        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length - 1]
        this.heapifyDown();
        return maxValue;
    }
    heapifyDown() {
        let currentIndex = 0;
        while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
            let biggestChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = this.getRightChildIndex(currentIndex);
            if (this.data[rightChildIndex] !== undefined && this.data[rightChildIndex] > this.data[biggestChildIndex]) {
                biggestChildIndex = rightChildIndex;
            }
            if (this.data[currentIndex] < this.data[biggestChildIndex]) {
                this.swap(currentIndex, biggestChildIndex);
                currentIndex = biggestChildIndex;
            } else {
                return;
            }
        }
    }
}

const heap = new Heap();
console.log(heap);
heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(','));

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log('Top 5 items: ', a);
console.log(heap.data.join(','))