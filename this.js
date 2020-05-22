function foo(){

}
//3
let obj = {
    a:1,
    foo
}
foo();
//2.
foo.call()
foo.apply()
foo.bind()
//3. 
obj.foo()
//4. new
function Bar() {
    //this指向谁，a这个属性到底应该加给谁
    this.a = 123
}
// 当new的时候
// const bar = new Bar()  //new的时候this就绑定给了bar
// 再加一个bind 测试优先级
let obj1 = {};
// 1. bind 改了Bar2的this
const Bar2 = Bar.bind(obj1);
//2. new 改了Bar2的this
const bar = new Bar2();
//Bar2是指向obj1还是指向bar呢？
console.log(obj1, bar); //"{} Bar { a: 123 }" obj1没有任何属性