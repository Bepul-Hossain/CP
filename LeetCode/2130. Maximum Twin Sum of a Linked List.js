function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
const arrToList = (arr) => {
    return new ListNode(arr[0], arrToList.slice(1));
}
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

console.log(arrToList([1, 2, 3]));