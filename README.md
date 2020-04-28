## 协议
应用层上面的一个协议，
fe  <=>   http  <=>  rd(数据库)
fe: 李宗盛 传给 后端
后端：李宗盛 歌传给前端

两方传输数据，都要遵守 http 协议(规则)

https://www.baidu.com/  浏览器：http 方式去要资源
https://juejin.im/search?query=js&type=all

App  http


## ajax

## 同步 异步
一行接着一行执行
代码书写的顺序 并不是执行的顺序


## node
- js   chrome：v8 解释执行js
- 页面
- 网络
  
js 只在浏览器里面运行

v8 单独拿到服务端，node
<!-- 用 node 解释执行 js-->
node index.js

1. 双击
file:///Users/zhaomeng/Downloads/js-fullstatck/js/ajax-http/ajax.html
file：协议
本地文件

2. live-server
http://127.0.0.1:8080/ajax.html
http://localhost:8080/ajax.html
http 协议
127.0.0.1 IP 四个数字（0 ~ 255）
等同
locahost  域名
ajax.html 文件 放到一个服务器来了(只不过是本地)

https://www.baidu.com/   方便人类记忆
61.135.169.121:443
为什么 通过 

端口存在的目的：
一台服务器（电脑），运行很多东西 
port：区别每一个应用
ip地址能够找到你这台电脑
假设：
数据库 占用 8060
提供搜索服务 占用 443
。。。。     占用 。。。


## http 规定
- 请求行
  - 方法：GET juejin.com?query=js
  - url: juejin.com?query=js
  - 版本：1.1

- 首（头）部
  - key: value
  - Content-Type 内容类型

- 实体
  - 传输的具体的数据