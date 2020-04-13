//引入express框架
const express = require('express')
//创建网站服务器
const app = express();
// /创建路由对象
const home = express('./route/home.js');
const admin = express('./route/admin.js');

app.use('/home', home);
app.use('/admin', admin);



//端口监听
app.listen(8000);