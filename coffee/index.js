//1.构建coffee 类
//js 面向对象比较特别
var Coffee = function() { //匿名 值是函数
    console.log('开始给您泡制咖啡，请等等');
};
 Coffee.prototype.boilwater = function() {
   console.log('把水煮沸');
 }
 Coffee.prototype.brewCoffeeGriends = function() {
     console.log('用沸水冲泡咖啡');
 }
    Coffee.prototype.pourInCup = function() {
        console.log('把咖啡倒进杯子');
    }
    // 把类的原型上添加一个方法
    Coffee.prototype.addSugarAndMilk = function() {
        console.log('加糖和牛奶');
    }
    //抽象 隐去一些细节
    Coffee.prototype.makeCoffee = function() {
        this.boilwater();
        this.brewCoffeeGriends();
        this.pourInCup();
        this.addSugarAndMilk();
        console.log('咖啡做好了，请喝吧');    
    }
var coffee = new Coffee();
coffee.makeCoffee();
// coffee.boilwater();
// coffee.brewCoffeeGriends();
// coffee.pourInCup();
// coffee.addSugarAndMilk();
// 不需要引用那么多
  function Tea(type) {
//茶类
 this.type = type;
 console.log('开始给您泡制茶，请等等');
};
 
    
Tea.prototype.boilwater = function() {
       console.log('把茶煮沸');
     }
Tea.prototype.seepTeaBag = function() {
         console.log('用沸水冲泡茶');
     }
 Tea.prototype.pourInCup = function() {
            console.log('把茶倒进杯子');
}
        // 把类的原型上添加一个方法
        Tea.prototype.addSugarAndMilk = function() {
            console.log('加糖和牛奶');
}
        //抽象 隐去一些细节
        Tea.prototype.makeTea = function() {
            //this指向实例后的对象
            this.boilwater();
            this.seepTeaBag();
            this.pourInCup();
            this.addSugarAndMilk();
            console.log('茶做好了，请喝吧');    
}

const tea = new Tea('乌龙茶');
tea.makeTea();
console.log(tea.type)
