<template>
  <div id="app">
    <products />
    <cart />

    <!-- {{this.$store.state.userInfo}}
    <div id="nav">    
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
import ShoppingCart from '@/components/ShoppingCart'
import ProductList from '@/components/ProductList'
export default {
  mounted(){
    // 单一状态树
    // console.log(this.$store.state);
    // console.log(this.$store.state.products.all);
    // console.log(this.$store.state.cart);
    // console.log(this.$store.state.cart.items);

    // 获取商品，MVVM，商品列表的展示
    // 触发动作，去getProduct
    // this.dispatch('') 
  },
  components: {
    'products': ProductList, //'products'指定在当前组件中的名字
    'cart': ShoppingCart
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

[disabled]{
  cursor: not-allowed;
}
</style>
