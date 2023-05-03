// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const arrToList = (arr) => {
    if (arr.length) {
        return new ListNode(arr[0], arrToList(arr.slice(1)))
    }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummyNode = new ListNode(0, null);
    let currentNode = dummyNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2
    return dummyNode.next;
};

console.log(mergeTwoLists(arrToList([1,]), arrToList([3])));