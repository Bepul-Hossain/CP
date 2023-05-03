// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const listFromArray = a => a.length ? new ListNode(a[0], listFromArray(a.slice(1)))
    : null;
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let arrList = [];
    let currentNode = head;
    while (currentNode) {
        arrList.push(currentNode.val);
        currentNode = currentNode.next;
    }
    let n = arrList.length;
    for (let i = 0; i < n / 2; i++) {
        if (arrList[i] !== arrList[n - i - 1]) {
            return false;
        }
    }

    return true;
};


console.log(isPalindrome(listFromArray([1, 2, 1, 1, 1])));