// 引入express框架
const express = require('express');
//创建网站服务器
const app = express();

//网站维护公告
// app.use((req, res, next) => {
//     res.send('当前网站正在维护中...')
// })

app.use('/admin', (req, res, next) => {
    //用户没有登入状态
    let isLogin = true;
    //如果用户登入
    if (isLogin) {
        //让请求继续向下执行
        next()
    } else {
        //如果用户没有登录 直接对客户端做出响应
        res.send('您还没有登入 不能访问/admin这个页面')
    }
})

app.get('/admin', (req, res) => {
    res.send('您已经登入 可以访问当前页面')
})

app.use((req, res, next) => {
    //为客户端响应404状态码以及提示信息（使用的是链式链接）
    res.status(404).send('当前访问的页面是不存在的')
})
//监听端口
app.listen(4000);
console.log('网站服务器启动成功');