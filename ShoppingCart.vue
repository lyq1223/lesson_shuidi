<template>
  <div class="cart">
    <hr/>
    <h2>Your cart</h2>
    <!-- 这个products不是我们的products中的products,是等下cart中的items -->
    <p v-show="!products.length"><i>Please add some products to cart!</i></p>
    <ul>
      <li 
      v-for="product in products"
      :key="product.id">
      {{product.title}} - {{product.price}} x {{product.quantity}}
      </li>
      <p>Total: {{ total }}</p>
      <p>
        <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
      </p>
      <p v-show="checkoutStatus"> Checkout {{ checkoutStatus }}</p>
    </ul>
  <div>
      <!-- {{this.$store.state.cart.items}} -->
  </div>
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'
export default {
  //需要更详细的购物车商品数据，也就是要重新计算
  created(){
    console.log(this.$store.state.cart, this.$store.state.products);
  },
  // 通过computed获取products
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    // 我们的cart中的items中现在只有id,所以要用getters获取别的信息，然后再计算一下
    ...mapGetters('cart',{ //第一个参数是我们的模块参数
    // 将products拿出来，成为当前页面的products
    // cartProducts会是cart中的一个getter方法，就能对state进行一个改造
    products: 'cartProducts',
    total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout(products) {
      // console.log(products)
      //触发一个状态，派遣一个动作
      this.$store.dispatch('cart/checkout', products);
    }
  }
}
</script>

<style>

</style>