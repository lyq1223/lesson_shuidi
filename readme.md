820 单词的压缩编码
链接：https://leetcode-cn.com/problems/short-encoding-of-words

给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？
题意:
从0位置开始遍历字符串S，遇到#停止，得到time 从2位置开始遍历字符串S，遇到#停止，得到me 从5位置开始遍历字符串S，遇到#停止，得到bell