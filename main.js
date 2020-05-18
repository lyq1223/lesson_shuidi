import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//为应用引入mock，自己模拟假数据，假数据的格式跟未来的真数据是一样的，更好的把功能开发完整
// import Mock from '@/mock'  //拿到真数据 mock就能注销了

//后台管理项目，数据报表 给老板，运营看的，库里面订单数据，根据时间，事件进行筛选，分10页 排序
// element-ui适合，适合PC， 不适合mobile移动的！
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
