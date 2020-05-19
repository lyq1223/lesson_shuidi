<template>
  <li>
      <span @click="toggle">
          <em v-if="hasChild" class="icon">{{open?'-':'+'}}</em>
          <!-- 图标展示 -->
          <em v-if="!hasChild" class="icon file-text"></em> 
          {{data.name}}
      </span>
      <!-- 有子节点的时候就出现 ,用计算属性-->
      <ul v-if="hasChild" v-show="open">
          <!-- 递归放子节点 父组件中的数据-->
          <tree-item v-for="(item,index) in data.children" :data="item" :key="index"></tree-item>
      </ul>
  </li>
</template>

<script>
// 引入父组件
// import tree
export default {
    name: 'TreeItem',
    props: {
        data: {
            type: [Object, Array],
            required: true
        }
    },
    data() {
        return {
            open: false
        }
    },
    computed: {
        hasChild() {
            return this.data.children && this.data.children.length
        }
    },
    methods: {
        toggle(){
            if (this.hasChild) {
                this.open = !this.open
            }
        }
    }
}
</script>

<style>

</style>