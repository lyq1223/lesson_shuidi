//引入express框架
const express = require('express');
const bodyParser = require('body-Parser');
//创建网站服务器
const app = express();


app.get('/index/:id', (req, res) => {
    //接收post请求参数
    res.send(req.params) //通过params属性获取
})



//端口监听
app.listen(1111);