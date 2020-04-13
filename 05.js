// 引入express框架
const express = require('express');
//读取文件就要引用文件模式
const fs = require('fs');
//创建网站服务器
const app = express();

app.get('/index', (req, res) => {
    // throw new Error('程序发生了未知错误') //创建了一个错误实例
    fs.readFile('./02.js', 'utf8', (err, result) => { //utf8文件编码
        if (err != null) {
            next(err)
        } else {
            res.send(result)
        }
    })

})

//错误处理中间
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})
//监听端口
app.listen(4000);
console.log('网站服务器启动成功');