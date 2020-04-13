//引入express框架
const express = require('express');
const path = require('path');
// const bodyParser = require('body-Parser');
//创建网站服务器
const app = express();
//告诉express框架使用什么模板引擎，渲染什么后缀的模板文件
//第一个参数：模板后缀
//第二个参数：使用的模板引擎
app.engine('art', require('express-art-template'))
//告诉express框架模板存放的位置是什么
app.set('views', path.join(__dirname, 'views'))
//告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

app.locals.users = [{
    name: 'zhangsan',
    age: 20
}, {
    name: '李四',
    age: 30

}]

app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页'
    })
});

app.get('/list', (req, res) => {

    //render方法：
    // 1.拼接路径
    // 2.拼接模板后缀
    // 3.哪一个模板和哪一个数据进行拼接
    // 4.将拼接结果反应给了客户端

    res.render('list', {
        msg: '列表页'
    })
})


//端口监听
app.listen(1112);