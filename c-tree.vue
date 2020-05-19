<template>
<!-- 菜单 -->
  <div class="tree-menu">
      <ul v-for="item in data" :key="item.name">
          <!-- {{item.name}} 用递归把子节点输出-->
          <!-- c-tree-item不只是一个组件  还涵盖算法思想 -->
          <tree-item :data="item"></tree-item>
      </ul>
  </div>
</template>

<script>
import TreeItem from './c-tree-item'
export default {
    name: 'c-tree',
    props: {
        data: {
            type: [Object, Array],
            required: true
        }
    },
    components: {
        TreeItem
    }
}
</script>

<style>

</style>