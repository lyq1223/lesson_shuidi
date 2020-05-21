let p = Promise.resolve(1);
let p2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(234)
    },2000)
})
//async + await 就转换成这样了
function* test() {
    let a = yield p; //要保证a的值是p resolve之后的值 通过then获得
    console.log('a', a);
    let b = yield p2;
    console.log('b', b);
}
//目的是1.要执行generator，2.而且要保证顺序
//要有一个方法 要保证上面两个能实现
function asyncTogenerate(gen) {
    let g = gen() //要先拿到这个对象，才能执行generator, 一步步调用next
    //递归的方式执行
    function step(value) {
        let info = g.next(value); //还要给next赋值，保证这次的执行是上次的resolve的值 //就是这个"然后再交给下一个g.next 处理yield的返回值问题"
        //是否为true
        if(info.done) { //为true就终止
            return;
        } else {
            //把yield后面的东西（info.value)直接resolve
            //实现那个思想 //then后的东西会被res拿到
            //Promise包一层，然后再加一个then方法，then里面的方法，就是用来调用下一个yield方法（g.next)
            Promise.resolve(info.value).then((res)=>{
                //调用下一个yield的代码 只需要直接进入下一个递归就行，然是还要处理顺序问题
                //每个都要Promise.resolve包一层，包的是下一个yield，  resolve出去的东西都会被then的回调拿到
                //第一次 可以拿到p resolve 后的值：1
                step(res); //这里能拿到一个value 然后再交给下一个g.next 处理yield的返回值问题
            })
        }
    }
    step(); //启动 //第一次递归调用的时候不用赋值，之后的才要
}
asyncTogenerate(test);