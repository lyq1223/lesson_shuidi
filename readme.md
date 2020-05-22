# 从输入 URL 到页面展示，中间发生了什么? 越细越好 （必考！）

1. 多进程架构
2. IPC（inter

## 如何回答地有条理

1. 注重细节
2. 从想当然，到理所应当 v8 引擎及浏览器架构
3. 这是一个可以用来全面考察，前端是否具有完整计算机本科学习能力的代表题
   题目关于： Web 开发 + 网络 + 操作系统
4. 如何规范的回答这道题 是区分新手还是高手的，有条分水岭
   要回答得有条理，条理核心围绕进程，作为流程细化，回答这个问题的逻辑驱动

动手实操

1. 浏览器 proxy 通过浏览器来代理我们访问页面
     <!-- Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。 -->
   打开浏览器 关闭其他应用
   动手 demo 动手实操。
   发生的应用场景是发生在浏览器上的

- 输入一个不是 URL 的东西
  输入 URL 发生在浏览器，也叫做上网的代理，同构浏览器来访问，代理我们访问网页的
  如果当作搜索框来使用：会使用默认的搜索引擎，搜索词条
  如果输入 URL
  我们上掘金的时候 没完整的输入域名：juejin.im，浏览器会把域名补全为：https://juejin.im/ 用户体验做得很好，只需要输入容易记的域名，不用写别的。
  这是【补全协议】

2. 浏览器中 操作系统里的进程
   shift + esc 打开浏览器给更多工具中的任务管理器
   细节： 像代码架构分层一样，把流程细化
   主进程 是管家  
   web 访问 浏览器 chrome 是一个多进程的一个架构模式，最流畅，但更耗内存，会同时启动多个进程（这是比 IE 优秀的地方），让页面的启动更快
   打开一个页面，至少有 4 个进程，每个进程负责一件事，进程间并行执行，当应用启动的时候（也就是 Chrome 主进程启动的时候），再加上几个子进程（进程之间是要通信的，进程管理问题。）

   - GPU 进程负责：GPU 加速 (3d 渲染; three.js; css 中的 transform3d; canvas),用来渲染进程
   - network Service 进程负责：
   - 标签页进程负责：
     chorme 多进程架构带来现代浏览器的快速访问体验， chrome 就是代表；多进程架构，可以做到高并发，

   1. 浏览器主进程：

   - 应用启动，启动浏览器
   - 提供了 URL 输入的交互（输入 URL）；子进程管理；（子进程(进程间通信 IPC)）
     文件存储功能：
     文件缓存 访问过的静态文件会在本地缓存，下次使用就直接在本地取
     cookie localstorage... BOM Browser Object Model

   2. 渲染进程 GPU 将 html css js 图片解析成为可交互的页面

   3. 网络进程 大部分人回答的都是这个进程 提供下载功能 时间上比渲染更早些

- 执行过程梳理：
  访问过程，问题回答清楚，就是要把执行流程说出来，这个流程是进程间的流程
  1. 浏览器进程接受到用户输入的 URL 请求时，现在还在主进程上做事情，IPC（主进程调用子进程
     （进程间通信））将 URL 交给网络进程，网络进程分析一下
  2. 网络中子进程发起真正的 URL 请求 这个请求是由 c++模块发送请求 node-》c++（它更高效）
     2.1 请求有 request
     2.2 response
  3. 网络进程 接受到响应数据（这里是响应头数据）后（响应数据包括响应头 + 相应体），通知渲染进程开
     始准备干活
     因为响应的数据有很多种(text/heml test/json image/jpg)，怎么提前通知渲染进程的？接受到头数据后，
     交给浏览器主进程
     会提交导航消息(CommitNavigation)到渲染进程，
  4. 渲染进程收到导航提交信息后开始准备接受某格式，然后直接和网络进程建立数据通道，网络数据开始分块到达（管道）
  5. 渲染进程会向浏览器进程发送“确认提交”，告诉浏览器进程已经准备好接受和解析页面数据
  6. body 到了 到渲染进程进行渲染。 渲染之前，最后还有一个移除之前的页面-》由浏览器渲染。然后确定要更新的文档。豆瓣始终是一个页面
     页面的重绘和重排。 渲染进程会向主进程提交确定文档消息 pending
     三个进程+三个消息


    并行执行

3. 发出请求
   loading 的过程
1. DNS 解析（域名解析），第一次的时候从 DNS（Domain Name Server）服务器找到，将域名变成 ip 地址（本地还会存一份）
   解析完了之后 就会有一个 loading,拿到头信息之后，就会将加载页面的标签 loading

# 关于学习

1. leetcode 题目
2. 面试
   面试： 看掘金面试相关技能点文章的列表
   问自己问题，回答，回答不了去搜答案，不直接看文章
   自己解决了才去看文章
   看文章先看目录，自己先想一下，再去看文章。
   注重思考，自己总结，然后写掘金文章会提升的很快
   极客时间 + 掘金 + 书 + leetcode + 剑指 offer
3. 还可以以写文章的方式来学习,为了文章主题，学习某个知识点。
