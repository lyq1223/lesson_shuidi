- 简历，技能点描述，从词，变成话语,再变成花语

## vue + graphQl
### RESTful
前后端联调的时候url的设计很重要
文章系统posts 查看某一篇文章/posts/show/1 这个url设计的科学吗？
不科学 /posts/1 这个是合理的
因为restful是后端暴露资源的解决方案，多年一只受追捧,一切皆是资源
1. http 动词
GET/POST/DELETE/PATCH/PUT...
2. 每一个url代表一种资源，网站是向外暴露资源的，所以才会有/posts/1
之前的url累赘的地方，就是不够简洁，之前的体现的是MVVM的特点

每一个url代表资源，url中不能有动词
设计一个好的url，里面不能有动词，动词仅限http动词 get代表的就是show
资源是名词，/posts是名词

### 设计一个url
网上汇款，从账户1向账户2汇款500元
阮一峰：http://www.ruanyifeng.com/blog/2011/09/restful.html
错误的URI是：
POST /accounts/1/transfer/500/to/2
正确的写法是把动词transfer改成名词transaction，资源不能是动词，但是可以是一种服务：

　　POST /transaction HTTP/1.1
　　Host: 127.0.0.1
　　
　　from=1&to=2&amount=500.00
/transaction 交易 他足够大 可以作为独立模块website 
http1.1支持cookies 提供缓存，添加复用
POST 状态转化 这是有意义的http动词
from=1&to=2&amout=500.00 res body

3. 客户端通过http动词，对服务器资源进行操作，实现表现层状态转化，所以叫rest 
是什么资源，进行了什么资源的状态转化

资源是什么？发生了什么改变


- 不过在近几年来，restful被前端新的理念革命了-》grapgQL 
他可以让前端更好的使用及定义数据接口，达到什么效果
测试驱动开发 让代码更严谨，swagger，可以自动生成api文档，graphQL Apollo在用
让前端刚好的使用并定义数据接口，做到不浪费数据，数据格式更加严谨

以vue视角
vuex -> api -> mockjs -> server 这是传统的restful能表现的
优化一下：
vuex -> praphQL -> mockjs -> server 他定义的api可以让接口更加完美
因为restful主要用到的是谓语动词所以比较受后端的影响控制大，
前后端分开，后端不会把所有数据都说，就会有些数据冗余
graphQL让前端对数据接口有了更大的话语权，
数据流驱动管理应用开发，用graphQL设计api

初始化
npm init -y
安装
yarn add express json-server
yarn add express-graphql 中间件
新建index.js
定义新的接口

互联网暴露资源有了一个定义 + 资源有状态的转化，用谓语动词

怎么让node快速支持import?
"dev": "nodemon index.js --exec babel-node --presets env,stage-0"
将babel作为node的一个转译
指定预处理 env stag-0(第一阶段的补丁)
安装 
yarn add babel-cli babel-core babel-preset-env babel-preset-env-0
yarn add babel-cli babel-core babel-preset-env babel-preset-stage-0

npm run dev
### graphQL + vue让项目跑起来
安装graghql
yarn add graphql

npm run dev运行一下 到localhost:8080/graghql

QL 
queryLanguage 查询语言 query
query getGreeting { 
  //getGreeting位于schema文件的new GrapgQLSchema //我们没有这个getGreeting,这里的名字随意
  greeting //这个是field中有的
}
会出来
{
  "data": {
    "greeting": "hello ~"
  }
}
用jsonserver访问文件 利用restful提供对资源的访问，只要给一个json文件就能访问其中的数据，通过restful。
添加一个脚本
"json-server": "./node_modules/.bin/json-server --watch db.json --port 3300" //跨域提供服务
(用json-server打开db.json)
watch：监听
然后再启动一个接口
npm run json-server  快速访问数据，就不走mongodb了
给接口加上schema,加类型定义
schema.js

传统的前后端接口开发，虽然有restful，但是还是有些不需要的数据没过滤掉
前端希望对请求的数据严格控制，通过schema 用graphql过滤掉不必要的数据

query getPosts {
  posts{
      id,
      title,
      content
    }
}
取出来了：
{
  "data": {
    "posts": [
      {
        "id": "1",
        "title": "将进酒君不见",
        "content": "主人何为言少钱,径须沽取对君酌"
      },
      {
        "id": "2",
        "title": "长恨歌",
        "content": "蜀山水碧蜀山青,圣主朝朝暮暮情"
      }
    ]
  }
}