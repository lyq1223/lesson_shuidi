PWA   progress-web-app
PWA是一个概念
为了弥补web端的缺陷
- 离线化
断网了拿不到数据，打都打不开
- 开平页
react的那个脚手架
create-react-app做了离线化index.js中用了
serverWorker
- 桌面入口（有个icon,点icon就能进入） 配一个manifest.json是一个json配置文件
- 通知 用一个api （Notification）
这些都是web端的缺陷
PWA就是为了解决是些问题
PWA不是一个具体的技术，是个概念，是实现这些目标
service-worker--》离线化，断网了也能用
离线化今天晚上讲
https://m.weibo.cn/ 微博这个就是有的
断application中的server-worker中的网，发现还是能上网的，就是离线化

web-worker
一个新的线程
都是和js的主线程是不阻塞的

service-worker也是，是背后一个线程主要运行的，不和主线程阻塞

要先安装 -》激活（activited）-》idle

还有一个技术，也是在application
Cache里面，cache Storage是实现离线化的另一个
是个缓存的一个空间，就是把内容放在里面
缓存的名字（什么什么空间） + 地址

离线的关键：
service worker + Cache Storage

index.html

304是http缓存 
还有一个更厉害的缓存service-worker
service-worker + cache Storage : from ServiveWorker
一级缓存 二级缓存 三级缓存
意思是他们的优先级
service-worker + cache storage是位于http缓存前面的，浏览器最先到达ServiceWorker这层的，然后再去http那层，然后才是后端
缓存无处不在
brow -> SW -> http->后端

service-work + cache-storage :  from ServiceWorker
http 缓存：200  from-disk-cache from-memo-cache