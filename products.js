//每个模块中又有四大家族
import shop from '../../api/shop'
const state = {
    all: [
        // 里面的数据通过products传过来，这里就可以注销了
        // {   
        //     id :1,
        //     name: 'IPAD'
        // }
    ]
}
const mutations = {
 //mutations叫做对修改的定义，不能乱修改
 setProducts(state, products) { //对state的修改在这里
    state.all = products //？
 },
 decrementProductInventory(state, { id }) {
    const product = state.all.find(product =>product.id === id) 
    product.inventory--
 }
}
const actions = {  //按模块开发
    getAllProducts({ commit }) { //解构出commit,commit可以去commit出一个mutation能力，也由此可以修改模块状态
        console.log('get products');
        //api也可以模块化
        //shop的api模块化,让他上面提供getProducts模块化方法
        shop
            .getProducts(products => { //在服务器端拿到数据后回调
                commit('setProducts', products)
            })
    }
    
    
}
const getters = {

}
export default {
    //模块中声明命名空间节点，
    namespaced: true,
    state,
    mutations,
    actions,    
    getters
}