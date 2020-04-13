//引入express框架
const express = require('express');
const path = require('path');
// const bodyParser = require('body-Parser');
//创建网站服务器
const app = express();


//实现静态资源的访问功能
app.use(express.static(path.join(__dirname, 'public')))


//端口监听
app.listen(1111);