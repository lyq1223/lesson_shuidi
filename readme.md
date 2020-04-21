## this
***运行时***决定的，跟定义的时候无关
书写的时候
···js
function foo(){
    this.a+b;
}
foo 调用的时候决定this指向问题
```
- 默认 this 指向window
- call/apple()方法可以自己指定this指向问题，设置在他们的第一个参数里面