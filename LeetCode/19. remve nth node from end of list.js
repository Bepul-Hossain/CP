const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let l = 0;
//   let curr = head;
//   while (curr) {
//     l++;
//     curr = curr.next;
//   }
//   let dummyNode = {
//     value: -1,
//     next: head,
//   };
//   let removeNode = l - n;
//   curr = dummyNode;
//   let count = 0;
//   while (curr && curr.next) {
//     if (count === removeNode) {
//       curr.next = curr.next.next;
//       return dummyNode.next;
//     }
//     curr = curr.next;
//     count++;
//   }
//   return dummyNode.next;
// };

// console.log(JSON.stringify(removeNthFromEnd(head)));

var removeNthFromEnd = function (head, n) {
  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
console.log(JSON.stringify(removeNthFromEnd(head, 5)));
