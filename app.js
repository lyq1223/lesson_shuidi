//引入express框架
const express = require('express');
//路径处理模块
const path = require('path');
const bodyParser = require('body-parser');
//创建网站服务器
const app = express();

app.use(bodyParser.json());

//静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

app.get('/first', (req, res) => {
    res.send('Hello Ajax');
});

app.get('/responseData', (req, res) => {
    res.send({ "name": "zs" })
});

app.get('/get', (req, res) => {
    res.send(req.query);
});
app.post('/post', (req, res) => {
    res.send(req.body);
});

app.post('/json', (req, res) => {
    res.send(req.body);
});



//端口监听
app.listen(3000);
//控制台提示输出
console.log('服务器启动成功')