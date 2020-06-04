给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？
不占用额外空间，说明要在同一数组，然后用删除的方法
题解：
链接：https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/chun-zhao-si-yue-ep07rotate-xuan-zhuan-ju-zhen-jav/
一、倒序倒置法
1 2 3

4 5 6

7 8 9

1.将矩阵转置--->

1 4 7

2 5 8

3 6 9

2.将每一行row倒序reverse --->

7 4 1

8 5 2

9 6 3
GO没写出来。。。下次补