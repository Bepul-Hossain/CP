// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arrToList = (arr) => {
    if (arr.length > 0) {
        return new ListNode(arr[0], arrToList(arr.slice(1)))
    }
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let set = new Set();
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (set.has(headB)) return headB;
        headB = headB.next;
    }
    return null;
};

console.log(getIntersectionNode(arrToList([4, 1, 8, 4, 5]), arrToList([5, 6, 1, 8, 4, 5])));