const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa'); //用来跟前端连接起来
// 前端要调用后端，要跨域请求
const cors = require('@koa/cors'); //要安装
const { readFile } = require('./utils');

// 接住前端的gql查询，不再是restful
// 定义一个查询 怎么在mock中拿出来 约定一下类型是什么 不能为空，就像我们的scheme
const typeDefs = gql`
type: TodoItem {
    id: ID
    content: String
    checked: Boolean
}
type Query {
    TodoList: [TodoItem!]
}
`

const resolves = {
    Query: {
        TodoList: async () => {
            const data = await readFile('./mock/index.json');
            const todoList = JSON.parse(data); //变成json
            return todoList;
        }
    }
}
// 由前端来调用
// apollo graphql的封装
const server = new ApolloServer({
    // schema
    typeDefs, //query
    resolves //提供值
})
const app = new Koa();


app.listen(3001);

