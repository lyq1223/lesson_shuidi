// 定义新的接口
//怎么让node快速支持import?
// babel？使用babel预处理
// dev

import express from 'express';
import graphqlHTTP from 'express-graphql'; //是一个中间件
import schema from './schema'; //模型定义文件，交给graphqlHTTP

const app = express();

// 数据playground
// 数据一定是从数据库来的，数据都是通过req res然后用中间件提交回去，当有一个req -》 graphQL -> database
// 启动一个praphql服务，一个graphql的
// 可以给我们的接口定义schema 在这里定义会提供哪些接口，这些接口怎么样可以被访问
// 为这个新的api接口语言提供一个graphqlHTTP服务
app.use('/graphql', graphqlHTTP({   //提供一个模拟数据访问的地方//相当于访问这个路经就打开打开一个服务
    // 在前端也有像mongodb一样的schema，严格约定接口  graphql是新的接口定义接口 前后端都能运行
    // schema中定义会提供哪些接口
    schema,
    graphiql:true //把grapgQL插入后台 //会提供一个playground可以测试graphQL接口写的怎么样
}))

app.listen(8080);
// nodemon index.js