//用于创建网站服务器
const http = require('http');
// /用于处理url地址
// const url = require('url');
//app对象就是网站服务器对象
const app = http.createServer();
const querystring = require('querystring');

app.on('request', (req, res) => {
    let postParams = '';

    req.on('data', params => {
        postParams += params;
    });

    req.on('end', () => {
        console.log(querystring.parse(postParams));
    });

    res.end('ok');
});

app.listen(3000);
console.log('网站服务器启动成功');