<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <h1>订单管理</h1>
    <!-- v-loading数据没来之前先转转 -->
    <el-table
    v-loading="listLoading"
    :data="list"
    >
    <el-table-column label="ID"
    prop="_id"
    align="center"
    width="80"
    >
    <!-- 用来为表格加些东西,进行格式化
    slot-scope="{row}代表这一行，拿到行对应的值 -->
    <template slot-scope="{row}">
      <span>{{row._id}}</span>
    </template>
    </el-table-column>
    <el-table-column label="Name"
    prop="name"
    align="center"
    width="200"
    >
    <template slot-scope="{row}">
      <span>{{row.name}}</span>
    </template>
    </el-table-column>
    <el-table-column label="OrderDate"
    prop="orderDate"
    align="center"
    width="100"
    >
    <template slot-scope="{row}">
      <span>{{row.orderDate}}</span>
    </template>
    </el-table-column>
    <el-table-column label="状态"
    prop="status"
    align="center"
    width="400"
    >
    <template slot-scope="{row}">
      <span>{{row.status}}</span>
    </template>
    </el-table-column>
    <el-table-column label="邮费"
    prop="shippingFee"
    align="center"
    width="100"
    >
    <template slot-scope="{row}">
      <span>{{row.shippingFee}}</span>
    </template>
    </el-table-column>
    <el-table-column label="单价"
    prop="total"
    align="center"
    width="100"
    >
    <template slot-scope="{row}">
      <span>{{row.total}}</span>
    </template>
    </el-table-column>
    </el-table>
    <!-- 分页组件:total=""总共的数量有多少 修饰分页器layout 
    :current-page.sync="page" 同步页-->
    <el-pagination
      :current-page.sync="page"
      :total="total"
      :pageSize="limit"
      layout="total, prev, pager, next"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
  data() {
    return {
      page:1, //当前页
      total:100, //一共多少条数据
      limit:20, //每页显示20条
      listLoading:true, //加载数据中
      list: [
        // {
        //   "_id": "121212",
        //   "name": "韭黄",
        //   "orderDate": new Date(),
        //   "status": "completed",
        //   shippingFee: "0.5",
        //   total: "111"
        // },
        // {
        //   "_id": "121212",
        //   "name": "韭黄",
        //   "orderDate": new Date(),
        //   "status": "canceled",
        //   shippingFee: "0.6",
        //   total: "111"
        // },
        // {
        //   "_id": "121212",
        //   "name": "韭黄",
        //   "orderDate": new Date(),
        //   "status": "created",
        //   shippingFee: "0.7",
        //   total: "111"
        // }
      ]
    }
  },
  mounted(){
    // setTimeout(()=>{
    //   this.listLoading = false
    // },1000)
    // Axios.post('/api/orders',{
    //   params: {
    //     // 分页参数        
    //   }
    // })
    //不能接受动态路由吗？ /api/orders/:page/:limit
    // Axios.get('/api/orders',{
    //   params: {
    //     // 分页参数 
    //     page: this.page,
    //     limit: this.limit       
    //   }
    // })
    // Axios.post('/api/orders',{
      Axios.get('/api/orders',{
      params: {
        // 分页参数 
        page: this.page,
        limit: this.limit       
      }
    })
    .then(res => {
      console.log(res);
      // this.list = res.data.orders
      this.list = res.data.result
      setTimeout(()=>{
        this.listLoading = false
      },1000)
    })
  },
  methods: {
    handleCurrentChange(page) {
      // 翻页响应联动事件
      console.log(page);
    }
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
/* .red{
  color: red;
} */
</style>
