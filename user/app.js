const http = require('http');
const mongoose = require('mongoose');
const url = require('url');

//数据库连接 27017是mongodb数据库的默认端口
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));

//创建用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
})

//创建集合 返回集合构造函数
const User = mongoose.model('User', userSchema);
//创建服务器
const app = http.createServer();

//为服务器添加请求事件
app.on('request', (req, res) => {
    res.end('ok')
})
//监听窗口
app.listen(3000);