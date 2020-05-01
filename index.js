import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  //只有mutations中定义的函数，才有权利修改 state 中的数据
  mutations: {
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    },
    
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在actions中，不能直接修改 state中的数据；
        // 必须通过 context.commit()触发某个 mutation 才行
        context.commit('add')
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        // 在actions中，不能直接修改 state中的数据；
        // 必须通过 context.commit()触发某个 mutation 才行
        context.commit('sub')
      }, 1000)
    }
  },
  getters: {
    showNum(state) => {
  return '当前最新的数量是[' + state.count + ']'
}
  }
})
