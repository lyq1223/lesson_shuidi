<template>
  <!-- Products -->
  <!-- {{this.$store.state.products.all}} -->
  <ul>
    <!-- 这里的products从哪里来？ -->
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price}} - {{product.inventory}}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">Add to cart</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  // vuex中的getter相当于这里的computed
  // 直接这样computed: mapState(['products.all']) //不会生效，
  computed: mapState({
    //会去把一个状态映射过来
    // mapState就会把state这个状态带过来,只能进行读操作
    //computed这个计算属性是一个函数的形式，函数名就是属性名

    products: state => state.products.all
  }),
  created() {
    //比mounted更早一点，实例化之后就做，不等挂载html
    //数据的请求只在actions中 ，不会再组件中的，在vuex中
    // dispatch派发方法，只会找到根节点上的products
    console.log(this.$store.state.products); //"[__ob__: Observer]"
    this.$store.dispatch("products/getAllProducts"); //这里利用到了命名空间，所以可以放在模块的文件中，不用放在store.js
  },
  methods: mapActions("cart", [
    //把cart模块的哪几个方法引入进来，有了cart中的命名空间才能这样直接引入模块
    "addProductToCart"
  ])
};
</script>

<style>
</style>