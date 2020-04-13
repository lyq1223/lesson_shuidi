// 引入express框架
const express = require('express');
//读取文件就要引用文件模式
const fs = require('fs');
//导入promisify方法
const promisify = require('util').promisify;
// 重新包装一个引入了promisify方法的读取文件的方法
const readFile = promisify(fs.readFile);
//创建网站服务器
const app = express();

app.get('/index', async (req, res, next) => {
    try {
        await readFile('./aaa.js')
    } catch (ex) {
        next(ex);
    }


})

//错误处理中间
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})
//监听端口
app.listen(5000);
console.log('网站服务器启动成功');