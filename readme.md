只出现一次的数字
https://leetcode-cn.com/problems/single-number/
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

ab, ok := m[v] //检测一下 hashMap 有这个K吗hash表会花费空间
// 有值的话就赋值给ab,ok就是是否取值成功
fmt.Println(ab, ok)				
0 false //0申请了多少长度的数组，会默认给相应的位置填0 false表示假，表示这个地方没有赋值
0 false
0 false
0 false
0 false
0
_, ok := m[v] 用 _ 只看能不能正确取到值