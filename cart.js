// import products from "./products"
import shop from '../../api/shop'
//每个模块中有四大家族
const state = {
    items: [],
    checkoutStatus: null
}
const mutations = {
    pushProductToCart(state, { id }){
        state.items.push({
            id,
            quantity:1
        })
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++   //因为是一个对象，所以是一个引用式赋值，这里改变了，数组中的数据也会改
    },
    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    },
    setCartItems(state, { items }) {
        state.items = items
    }
}
const actions = {
    addProductToCart({commit},product){
        // console.log(payload)
        // console.log(product)
        if(product.inventory > 0 ) {
            const cartItem = state.items.find(item =>item.id === product.id)
            if(!cartItem){
                commit('pushProductToCart',{id: product.id})
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            // 向products模块提交一个mutation: decreateQuentity，要从cart模块-》products模块
            // {root: true}回到根节点上
            commit('products/decrementProductInventory',{id: product.id},{root: true})
        }
        // 将当前状态下的items
        return state.items.map(({id, quantity}) =>{

            // rootState根节点上
            // const product =rootState.product.all.find(product => product.id ===id)
            // return {
            //     title: products.title,
            //     price: products.price
            // }
        })
    },
    checkout({commit}, products) {
        // console.log(products);
        const savedCartItems = [...state.items];
        console.log(savedCartItems);
        commit('setCheckoutStatus', null);
        commit('setCartItems', {items: []}); //clean cart
        //调用api,将订单存一下
        shop.buyProducts(
            products, //真正下单
            // success的时候做什么
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed'),
                // 失败了就再来一次，之前清空了cart不过记录了cart,利用上它
                commit('setCartItems', {items: savedCartItems})
            }
        )
    }
}
const getters = { //可以将state重新计算的
    //四大家族的getters,可以获得其他的getters函数,
    cartProducts (state, getters,rootState){ //其他的getters
        //因为要从这里穿梭到products模块去取它的state.all,所以需要根节点
        // [{id:1, quantity:1}] --> [{id:1,title:'ipad' price}]
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    cartTotalPrice (state, getters) { //要去cartProducts拿数据，要用到getters参数
        //all id quantit*price
        //cartProducts
        // reduce()就是将数组一项项消灭？消灭之前留下结果 之前的total 当前商品product
        //???
        return getters.cartProducts.reduce((total, product) =>{
            return total + product.price * product.quantity
        }, 0) //total开始是为0的
    }
}
export default {
    namespaced: true, //命名空间
    state,
    mutations,
    actions,    
    getters
}