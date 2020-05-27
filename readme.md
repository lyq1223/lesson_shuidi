199. 二叉树的右视图
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view

层次遍历
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

题解：https://leetcode-cn.com/problems/binary-tree-right-side-view/solution/er-cha-shu-ceng-ci-bian-li-fang-fa-by-bin-izwk69cp/

1.首先要明白找到从右边看第一个节点，就是广度优先遍历的最后一个值
2.广度优先我们用层次遍历的方式来解
3.用一个队列来记录进队出队的顺序，每当一个节点已经将孩子节点都纪录到队列时，将该节点从队列中移除
4.size用于纪录当前层节点的数量，当所有节点的孩子都被纪录时，则可以开始遍历下一层的节点了
5.如果从右往左进队的话，那么一层的第一个节点就是从右边可以看到的值

