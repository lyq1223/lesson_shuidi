import VueLoaderInstall from './loading/index.js'

// Vue的全家桶，也叫做Vue的周边生态，都是以插件的方式插入到Vue中
// Vue.use()就是会去调用我们的插件的install方法将其中的组件能够全局访问
// 调用install方法，就回去调用Vue.use()，将VueLoaderInstall加载起来，他是一个Vue-loader
export default {
    install (Vue, options) {
        Vue.use(VueLoaderInstall, options)
    }
}