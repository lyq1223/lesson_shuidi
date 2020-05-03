# 疫情 Vue

http://101.200.145.232/#/jiangxi
https://github.com/border-1px/2019-nCov

- vue-cli 是有别于 vue 的
  我们安装的是 vue-cli 是用来进行 vue 全家桶开发的命令行工具

1. 何为 vue 全家桶？
   vue 是一个框架，周边有一些工具
   用 vue-cli 就是用来开发单页应用的
   用/url 的切换来显示不同的内容
   是怎样工作的呢？
   vue-cli 会帮我们生成一个 yiqin 框架（目录结构）
2. 组件化的思维开发页面
   main.js 是入口-》将 App.vue 根组件挂载上去-》App.vue 再去挂载其他组件
   首先 main.js #app 这个元素在 public/index.html
   vue-cli 帮我们生成的模板是怎样工作的？
   npm run serve 的时候会先找到 main.js 执行，这里面引入了 vue,vue 的项目执行就是以一个 vue 项的实例开始的；然后里面要挂载在一个元素上，从这个元素开始就是 vue 的运行区域（/#app);App 组件通过 import 引入进来，每个组件都是一个以 vue 后缀的一个文件，他分成三部分 template、script、style。
   public/index.html 是一个首页模板
   main.js 会用 vue 去接管，并且在 App.vue 以及它之后....组件化编写(就不用分开写 html,css..),-》编译成一个 js 文件，会塞到 index.html 后面，script 里面让代码去执行。
   vue-cli 流程。

npm run build 会帮我们打包项目 dist。
dist/index.html live-server 启动，界面出来的跟之前的 npm run serve 一样的。

- 如何实现不同城市疫情的查看？
  同一个页面，router 转换。单页应用。头部始终不变。
  url 的变化。
  yarn add vue-router

<!-- component是组件，views是页面级别的组件，会有路由对应（更大一点）
    向路由对应的顶级组件就放在views下面，例如about /form ...;
    component是构成页面的子组件，比如alert...构成一个页面的。 -->

加了路由页面之后要在 App.vue 中加上<router-view/>

- main.js 是入口，挂载 new Vue()
- VueRouter 补全 vue 生态，承担路由的职责
- App.vue 是根组件，
- 因为是单页面，<router-view />全局组件就是我们的占位符，由 Vue.use(VueRouter)全局启用

App.vue 就负责单页应用的头部导航（切换 router 也一直在的）

# yiqing1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
