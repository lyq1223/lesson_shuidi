function fib(n) {
    if (n == 0 || n == 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(8))

// 递归思想
// 1：结束的条件
// 2.重复运用的逻辑

// 斐波那契数列：1，1，2，3，5，8，13，21，34
// 1.从前往后推导： 从1 1 开始把后面每一项 推导出来
// 2.从后面往前推导
// fib(4): fib(3) + fib(2)
// fib(3): fib(2) + fib(1)
// fib(2): fib(1) + fib(0) 已经知道答案了，不需要求解，结束条件
// fib(1): fib(0) + fib(-1)