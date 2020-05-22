//求和的函数来讲bind
//常见版调用
// const sum = (a, b, c) =>{
//     return a + b + c;
// }
// console.log(sum(10, 10, 10));
// //用bind调用
// // 第一次调用
// //bind的第一个参数是绑定sum的this，这里不涉及this，所以写null,后面的参数是真正的参数
// //参数不够
// let sum10 = sum.bind(null, 10);
// //参数不够还得接着传剩下的参数，还有什么能传参呢？ 只有函数能传参，所有bind返回一个函数，让他能继续传参
// //第二次调用
// console.log((sum10(20, 30))); //sum10是因为bind返回的函数

//基于上面的手写一个bind
// bind的位置是在哪里呢？是在Function.prototype上的
// Function.prototype.mybind = function(thisObj, ...arg1) {
//     let fn = this;
//     // 他是要返回一个函数的(要能接着传参)，所以要定义一个函数，这里定义成一个有名字的函数
//     function innerFunc(...arg2) {
//         //谁调用的bind就说明我们要把所有的参数传给谁，谁调用的，可以通过this拿到
//         const args = arg1.concat(arg2); //把参数连起来
//         //调用
//         // 还要绑定this ,只有call / apply / bind 能绑定 所以 
//         // 要保住返回值 不能丢了 所以要return
//         return fn.call(thisObj, ...args);        
//     }
//     return innerFunc;
// }

//加强版bind
// 题：实现ES5中function原型的bind方法，是的以下程序最后能输出'success'
// function Animal(name, color) {
//     this.name = name;
//     this.color = color;
// }
// Animal.prototype.say = function () {
//     return `I'm a ${this.color} ${this.name}`;
// };
// const Cat = Animal.myBind(null, 'cat');
// const cat = new Cat('white');
// // cat 
// if (cat.say() === 'I\'m a white cat' &&
//     cat instanceof Cat && cat instanceof Animal) {
//     console.log('success');
// }

Function.prototype.myBind = function(thisObj, ...arg1) {
    // fn/this 上面 其实可能有个 .prototype 的对象
    let fn = this;
    function innerFunc(...arg2) {
      const args = arg1.concat(arg2);
      // this 
      // 因为 this 没有绑定到 cat 上面，并没有做优先级的处理
      // 判断 是不是 this 调用？？ 怎么判断.target
      let isNewCall = this instanceof innerFunc;
      // isNewCall ? 实例 : thisObj
      return fn.call(isNewCall ? this : thisObj, ...args);
    }
    //直接这样等于吗？好像找到了，没报错，方法有了，但是查看cat.say()是，发现里面的参数又丢失了
    innerFunc.prototype = fn.prototype;
    // say 方法吗？？？
    return innerFunc;
  }
  function Animal(name, color) {
    this.name = name;
    this.color = color;
  }
  Animal.prototype.say = function () {
    return `I'm a ${this.color} ${this.name}`;
  };
  const Cat = Animal.myBind(null, 'cat');
  // 2.2
  // 由一个方法(这个方法上面可能存在 .prototype 的对象) 调用 bind  -> 经过 bind 处理，处理完返回一个方法  ->
  // -> 但是我们返回一个方法,把原来可能存在的  .prototype 的对象 弄丢了
  // 也就是说 别人的方法，在调用我们的myBind的时候，经过我们的bind的处理，他原来的prototype被弄丢了，
  // 我自己的innerFun是没有prototype的，所以cat调用.say会找不到这个方法了，所以要加上，加谁呢？可定是要等于人家的.prototype的
  // Cat 哪里来的？？
  // 答：由 myBind 生成的，你调用了 myBind 我给你返回的
  // 我给你返回了 innerFunc
  // 最终：Cat 哪里来的？？就是 Cat === innerFunc
  // 
  const cat = new Cat('white');
  // new innerFunc()拿到cat这样一个对象
  // innerFunc 没有 prototype
  // cat 
  // 2.1
  // .say 找不到 那个方法 本身我们写的mybind上面是没有say方法的，Animal.prototype上才有
  // 然后Animal又调用了myBind()
  // 所以说我的fn/this 上面 其实可能有个 .prototype 的对象
  // 因为谁调用mybind fn/this就指向谁,Animal调用了，而Animal上面有个prototype的对象的  
  // cat = {}
  console.log(cat, cat.say())
  if (cat.say() === 'I\'m a white cat' &&
    cat instanceof Cat && cat instanceof Animal) {
    console.log('success');
  }
  
  function Fooo() {
    // this === bbbb
    // bbbb instanceof Fooo // true
    // this instanceof Fooo // true
    this.a = 123
  }
  let bbbb = new Fooo()

// 解析：
// 运行的时候 发现：cat.say() is not a function,为什么？
// 1. Cat哪里来的？
// Cat是由myBind生成的，myBind在哪里？ 
// Cat是调用了myBind返回的，返回了innerFunc
// 最终Cat是哪里来的？就是Cat === innerFunc 这个关系
// 2.
// 拿Cat去new,相当于把innerFun去new了 生成了cat
// innerFun上面由say方法吗？没有，say方法在哪?在Animal上，
// 然后Animal又.myBind了，Animal上面有个prototype的对象
// 3.prototype找到了，可是参数弄丢了，“white” “cat”哪去了？为什么最后输出的是undifined?
// white是new的时候传进去的，cat是bind的时候传进去的，参数是以什么样的方式取的，
// 通过this.color和this.name取的，也就是说this上面的东西没拿到，为什么？
// 把cat这个实例输出来看发现是 Animal{} 是个空的对象，为什么没有属性？
// this绑定到哪里了？this绑定到thisObj上，thisObj指向谁，Animal.myBind(null, 'cat');发现thisObj指向null
// 因为this,没有绑定到cat上面，这与我们this的优先级有冲突，本来是new > bind
// 我们的Cat有两个this的规则在上面，一个是bind，把他绑定在null上，还有一个是new，但是我们的myBind并没有处理优先级，我们是统一绑在了thisObj上
// 所以要做一个区分，做一个优先级的处理
// 做一个this调用的判断，怎么判断？.target可以;instanceof也可以
// 如果它是通过this调用的假设有个函数fn1 ,b是fn1 new出来的实例，fn1 中有一个this.a 此时b === this
// 而b instanseof fn1 是成立的，也就是b的原型链上面有没有存在fn ，所以this instanceof fn1 也是成立的 所以可以用instanceof


