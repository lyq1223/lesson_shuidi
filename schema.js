import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList
} from 'graphql'
import axios from 'axios'
const API_BASE = 'http://localhost:3300';
const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        }
    }
})
// 就像在定义一个mongodb的表
// 一个项目就会有一个跟类型，有很多个字段，也就是可以有很多种查找
const QueryRootType = new GraphQLObjectType({ //接口就是一个gragnql对象
    name: 'QueryRoot', //我们定义的查询集
    fields: {
        // 定义查询的方法 //请求greeting的时候给我们返回的就是hello
        greeting: {
            type: GraphQLString,
            resolve: () => `hello ~` //返回响应的数据值//异步的，函数里面就可以异步
            // 为什么用了resolve?暗示了什么？ 上接vue 接口需要，不再是调用。。下接数据的真实请求 做 axios请求  （graphql不是必须的）
        },
        // 文章
        posts: {
            type: new GraphQLList(PostType), //数组类型
            resolve: () => {
                // return [{
                //     id: 1,
                //     title: 'linan',
                //     content: '好好学习，天天向上'
                // }] //数组中每一项都得是postType类型的 再加一个db.json 用jsonserver打开db.json
                // 想真正的数据服务发送请求
                return axios.get(`${API_BASE}/posts`) //请求所有的文章
                .then(response => response.data)
            }
        }
    }
})

// 向外输出模型定义文件
// 像vuex
// schema有增删改查 根据不同的操作定义不同的schema
// graphql中数据不在他这里，但是他可以有一个规则
export default new GraphQLSchema({
    query: QueryRootType //针对查询，修改定义不同的schema 对状态的读//查询的根类型
    // mutation: //对状态的修改
})