// import { fstat } from "fs";

// import { createBrotliCompress } from "zlib";

const arr = [{age: 10}, {age: 20}]


//计算年龄总和
//常用作累加器
let sum = arr.reduce((acc, cur)=>{  //上一次的值  当前对象的值
    //第一次是0 + 10=10; 第二次是上一次的+当前的 10+20=30,最后会只输出一个值
    return acc + cur.age
}, 0); //0是初始值
console.log(sum); //30



//想把里面的每一项*2
const newArr1 = arr.map(e => {
    return { //返回一个对象回去，因为本来就是一个对象 //回调
        ...e,
        age: e.age*2     //原来的对象不变，都展开放在这里 //回调
    }
});
console.log(newArr1);

//写一个回调！！！一定要知道的
//定义一个函数 要两秒后输出hello world
//给的test没有函数体，要让他能调用
function test(callback) { //只有这个能写
    //str怎么变成hello world的？
    //cb->promise->async 都是基于回调实现的
    setTimeout(()=>{
        callback('hello world', new Error('发生错误了'))
    },2000)

}

//这是个回调，要求两秒后输出hello world,并且只能该上面的，不能改这里的
test(function(str, err) {
    console.log(str); //为什么str === hello world
});
// function foo(str) {
//     console.log(str);
// }
// foo('hello world'); //等着别人来调用foo,调用的时候把参数传进去

//这些是回调，但是里面是怎么个实现过程的呢？是怎么拿到回调的这些值的？
// fs.readFile('./',()=>{

// })

//简单版本的map
Array.prototype.myMap = function(cb) {
    let t ={};
    for (let i=0;i <this.length; i++) { //谁调用，this就指向谁
        // cb(this[i]);
        t.push(cb(this[i]));
    }
    return t;
}
//希望生成一个新数组
const newArr = arr.map(e => {
    return { //返回一个对象回去，因为本来就是一个对象 //回调
        ...e,
        age: e.age*2     //原来的对象不变，都展开放在这里 //回调
    }
});

//都是先定义个
//再返回
//写成

Array.prototype.myMap1 = function(cb) {
    // let t ={}; //巧了 我们reduce的第二个参数也是默认值的功能
    // for (let i=0;i <this.length; i++) { //谁调用，this就指向谁
    //     // cb(this[i]);
    //     t.push(cb(this[i]));
    // }
    // return t;

    return this.reduce((acc, current)=>{
        // acc: {} ; corrent: {age:20}
        let res = cb(current);
        //要和之前的数据拼起来
       return acc.concat(res); //要不断return 告诉下次的acc要concat
    }, {});
}