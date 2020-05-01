<template>
  <div>
    <!-- 在template里面this可以省略 -->
    <!-- <h3>当前最新的count值为：{{ this.$store.state.count }}</h3> -->
    <h3>{{ this.$store.getters.showNum }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">+1 Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandler1() {
      this.$store.commit('add')
    },
    btnHandler2() {
      // commit的作用，就是调用 某个 mutation 函数
      this.$store.commit('addN', 3)
    },
    // 异步的让 count 自增加一
    btnHandler3() {
      // 这里的dispath函数，专门用来触发action
      this.$store.dispath('addAsync')
    }
  }
}
</script>
