
class KthLargest {
    constructor(k, nums) {
        this.k = k
        this.minHeap = new MinPriorityQueue();

        nums.forEach((num) => {
            let p = this.add(num)
            console.log(p);
        })
    }
    add(val, { minHeap } = this) {
        const isUnderCapacity = minHeap.size() < this.k;
        if (isUnderCapacity) {
            minHeap.enqueue(val);

            return this.top();
        }
        const isLarger = this.top() < val;
        if (isLarger) {
            minHeap.dequeue()
            minHeap.enqueue(val);
        }

        return this.top();
    }
    top({ minHeap } = this) {
        return minHeap.front()?.element || 0
    }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);
kthLargest.add(5);
kthLargest.add(10);
kthLargest.add(9);
kthLargest.add(4);
