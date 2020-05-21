//1. 回调
// fs.readFlie('./', (content)=>{
//     setTimeout(()=>{
//         content += '123';
//         fs.append('./',content, (err)=>{

//         })
//     }, 3000)
// })
// //2. Promise
// Promise('./')
// .then(()=>{
//     content +='123';
// })
// .then(()=>{
//     fs.append('./')
// })
// //很多很多.then之后 就会不大好看
// // 加了async之后就会比较好看
// // 3. async+await
// //一行一行的组织 就不是一直都要.then了
// //Co怎么用：
// console(
//     function * test() { //*说明就是一个 generator
//         let c = yield fs.readFlie();
//         c +='123';
//         let res = yield fs.append('./', c);
//     }
// )

// async () => {
//     let c = await fs.readFlie()
//     c +='123'; //c是什么？是promise resolve的时候的值
//     let res = await fs.append('./',c);
// }
//那么babel是怎么实现async+await?
// 2-3步之间有一个Co库 作者：TJ
//Co库也是用来帮我们优化Promisede.then很多了之后的很丑的代码
//CO优化的思路：用了es6的一个叫generator的东西
//1. 了解generator
//生成一个立即resolve的方法：Promise.resolve(),也有立即reject的
// let p = Promise.resolve(1);
// (async function(){
//     let c = await p; //一般 await后面加Promise更有意义
//     console.log(c);
// })
// await后面接Promise，才能保证async + await这样的顺序： 等着Promise resolve之后，后面的代码才会执行
// 以什么来保证这个顺序，也就是p resolve了之后后面的才执行
let p = Promise.resolve(1);
let p2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(234)
    },2000)
})
//重点
(async function(){
    let c = await p; //一般 await后面加Promise更有意义
    let d = await p2;
    let f = await 789;
    console.log(c);
})()
//没有async + await怎么实现等着实现,保证顺序?
//利用then 让它等着前面的resolve了之后才执行
// p.then(()=>{
//     p2.then(()=>{
//         //所以包一下789，为了统一处理.then的处理
//         Promise.resolve(789).then(()=>{
//             console.log(c);//因为这个不是个Promise
//         })
//         // let f = await 789;
//         // console.log(c);
//     })
//     // let d = await p2;
//     // let f = await 789;
//     // console.log(c);
// })

//再用Promise包装一遍，目的是不用再判断awwait.yield后面到底是Promise（有then方法）还是非Promise(没有then方法)
// 异步变同步 async + await 只是写法上面的好像变成了同步的，但代码执行起来还是异步的
// p p2 要先是一个Promise
Promise.resolve(p).then(()=>{
    Promise.resolve(p2).then(()=>{
        //包一下789，为了统一处理.then的处理
        Promise.resolve(789).then(()=>{
            console.log(c);
        })
        // let f = await 789;
        // console.log(c);
    })
    // let d = await p2;
    // let f = await 789;
    // console.log(c);
})

// 下一个yield的代码怎么挪到then回调里面呢？下一个yield的代码其实就是每次g.next()里面的
//思路是这样的
// Promise.then(()=>{
//     g.next()
// })