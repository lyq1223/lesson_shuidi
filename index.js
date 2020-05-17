import Vue from 'vue'
import Vuex from 'vuex'
//完成商品模块的数据管理分离
import products from './modules/products.js';
//集中管理products数据
import cart from './modules/cart' //添加树中的一个分支，集中管理

Vue.use(Vuex)
//vuex是单一状态树，单一就是我们的入口文件main.js中store只有一次实例化的机会(new vuex store),
// vue中仓库只能有一个，因为这样我们的状态就不会混
// 树？modules来了之后，树的概念就来了，state就是状态的根节点，modules中的就是叶节点

export default new Vuex.Store({ //new一个vuex 实例
  // 用户的登录状态，全局配置不那么模块化的东西放置在这里
  state: {
    userInfo: {
      uid: 1234,
      uname: 'hhl'
    }
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {  //模块化
    //为state分担任务,把状态分开来放
    products, //叶节点
    cart      //叶节点 购物车
  } 
})
