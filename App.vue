<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- 第三个要求，传递一个查询的参数进去 第一季度-->
    <!-- @keyup.enter.native = ""事件修饰符，enter键弹起来发生的事件,原来本身的事件就像submit -->
    <div>
      <el-input
        v-model="listQuery.title" placeholder="title" style="width:200px;" class="filter-item"
         @keyup.enter.native = "getList">       
      </el-input>
      <el-input
        v-model="listQuery.author" placeholder="author" style="width:200px;margin: 8px;" class="filter-item"
         @keyup.enter.native = "getList">       
      </el-input>
      <template>
      <el-select v-model="listQuery.value" placeholder="按id排序" @change="getList">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"          
          >
        </el-option>
      </el-select>
    </template>
    </div>
    <!-- 为什么不是@keyup.enter.native = "getList">   handleFilgter-->
  <el-table :data="list">
    <el-table-column 
      label="ID" 
      prop="id" 
      align="center" 
      width="80"> 
    </el-table-column>
    <el-table-column label="Title" prop="title" 
      align="center" width="300">
      <!-- 需要对他定义的时候就加上template -->
        <template slot-scope="{row}">
          <span class="link-type">{{row.title}}</span>
        </template>
    </el-table-column>   
    <el-table-column label="Author" prop="author" 
      align="center" width="100">
      <!-- 需要对他定义的时候就加上template -->
        <template slot-scope="{row}">
          <span class="link-type">{{row.author}}</span>
        </template>
    </el-table-column>  
  </el-table>
  <!-- :page-size="listQuery"为什么放listQuery中？
  page联动 -->
  <!-- @current-change="getList"再执行一遍，切换页面后，page值就会发生改变 传过去的参数会根据页面相应改变 -->
  <el-pagination 
    @current-change="getList"
    :total="total" 
    :page-size="listQuery.limit"
    layout="total, prev, pager, next"
    :current-page.sync="listQuery.page">
    <!-- 组件内部的current-page的值与外面的listQuery.page，.sync表示父子组件的props的关系同步父组件 -->
  </el-pagination>
  
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      options: [{
        value: 'asc',
        label: '升序'
      }, {
        value: 'desc',
        label: '降序'
      }],
      value:'',        
      list:[],
      total: 0, //总计，到时候好分页
      listLoading: false,  //加载中
      listQuery: { //专门负责查询的条件 
        page: 1,
        limit: 20,
        title: '',
        author: '',
        value: 'asc',
      }
    }
  },
  created() {
    this.getList()  //封装一下 等下可以复用
  },
  methods: {
    getList(){
      Axios.get('/vue-element-admin/article/list', {
        params:this.listQuery  //分页查询 要传参数 查询对象 发到mock去
      })
      .then(response => {
        // console.log(response); //mock已经插入到前端流程中了
        this.list = response.data.list
        this.total = response.data.total        
      })
      
    },
    
    handleFilgter() {
      // Axios.get('/vue-element-admin/article/list', {
      //   params:this.listQuery
      // })
      // .then(response => {
      //   // console.log(response);
      //   this.list = response.data.list;
      //   this.title = response.data.title;
      // })
    }
  }
}
</script>
<style>

</style>
