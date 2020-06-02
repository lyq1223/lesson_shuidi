var http = require('http');
http.createServer((req, res) => {
    if(req.url == '/new_page_not_go') {
        res.writeHead(204); //2开头的表示成功，204成功了，不过没什么可以返回的
        return
    }
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    // 连接后就有一个Tcp管道，就能写入
    // 写入字节码
    res.write("hello world");
    res.end(`
        <html>
            <head></head>
            <body>
                <a href="/new_page_not_go"></a>
            </body>
        </html>
    `)
})