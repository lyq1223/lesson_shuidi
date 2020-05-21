async+ await 的发展历史
最经典的是回调

1. 了解 generator
   //1.generator 内部相比普通函数而言，是可以被终止的
   //2.相比普通函数，generator 调用的时候是一步步的，用 next 来调用
   //3.可以理解为，有几个 yield 就要执行几个 next,每次执行用 yield 作为停顿
   用 done 是否为 true 来判断是否还要 next
   while(!g.next().done) {
   g.next();
   }
   next 传参问题要注意，

babel 转换代码：
官网地址：babeljs.cn
try it out 去官网看

async 和 await 是怎么转成 generator 的？
