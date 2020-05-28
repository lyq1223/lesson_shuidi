function listNode(val) {
    this.val = val;
    this.next = null;
}
const n1 = new listNode(7);
const n2 = new listNode(2);
const n3 = new listNode(4);
const n4 = new listNode(3);
n1.next = n2;
n2.next = n3;
n3.next = n4;

const a1 = new listNode(5);
const a2 = new listNode(6);
const a3 = new listNode(4);
a1.next = a2;
a2.next = a3;
// var reverseList = function(head) {
//     var list = head;
//     var p = list;
//     var q = null;
   
//    if(p == null)	//做个判断啊！！非常傻的一个错呜呜呜
//        return null;

//    while(p.next !== null) {
//        q = p.next;
//        p.next = q.next;
//        q.next = list;
//        list = q;     
//    }
//    return list;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let link1 = reverse(l1);
    let link2 = reverse(l2);
    // let p = link1;
    // let q = link2;
    // 进一标志
    let mark = 0;
    let res = new listNode();
    let cur = res;
    while (link1 || link2 || mark === 1) { //一定要加mark === 1
        let val = (link1 ? link1.val : 0) + (link2 ? link2.val : 0) + mark;
        //按位或赋值运算符使用两个操作值的二进制表示，执行按位或运算，并把结果赋给变量
        mark = val / 10 | 0;
        cur.next = new listNode(val % 10);
        cur = cur.next;
        if (link1) link1 = link1.next;
        if (link2) link2 = link2.next;
    }
    // 将结果再次翻转
    return reverse(res.next);

     function reverse(l) {
        // 迭代
        let cur = l;
        let pre = null;
        while (cur) {
            let temp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = temp;
        }
        return pre;
     }
};

console.log(addTwoNumbers(n1,a1));
// console.log(a1);