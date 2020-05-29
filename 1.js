function listNode(val) {
    this.val = val;
    this.next = null;
}
const n1 = new listNode(1);
const n2 = new listNode(2);
const n3 = new listNode(3);
const n4 = new listNode(4);
const n5 = new listNode(5);
// const n6 = new listNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// n5.next = n6;
// n6.next = null;

var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.val;
};
// console.log(n1);
console.log(middleNode(n1));

//java
//  快慢指针，慢指针始终比快指针慢1/2，快指针到终点，慢指针到中间。
// class Solution {
//     public ListNode middleNode(ListNode head) {
//         ListNode f = head, s = head;
//         while(f != null && f.next != null) {
//             f = f.next.next;
//             s = s.next;
//         }
//         return s;
//     }
// }