876：
给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。
https://leetcode-cn.com/problems/middle-of-the-linked-list/
利用快慢指针，使用两个指针，一个每次走两步，一个每次走一步，当走得快地走到头了，走得慢的不就刚好走到中位数了么？同样的道理，如果我们要求1/4，4/5，都可以使用类似的方法。
//  快慢指针，慢指针始终比快指针慢1/2，快指针到终点，慢指针到中间。
java:
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode f = head, s = head;
        while(f != null && f.next != null) {
            f = f.next.next;
            s = s.next;
        }
        return s;
    }
}