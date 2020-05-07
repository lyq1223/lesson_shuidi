// 模块化
import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const list = [];
const count = 100


const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>';
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0;  i < count; i++) {
  list.push(Mock.mock({
    id: '@increment', //自增
    timestamp: +Mock.Random.date('T'), // 返回时间戳 133333
    author: '@first',  //firstname 第一人称的
    reviewer: '@first',
    title: '@title(5, 10)',  //随机产生一个5~10长度的标题
    content_short: 'mock data', 
    content: baseContent,
    forecate: '@float(0, 100, 2, 2)',
    importance: '@integer(1,3)',
    'type|1':['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,  //关闭评论
    pageviews: '@integer(300, 5000)',  // 阅读量
    image_uri,
    platforms: ['a-platform']
  }))
}
// GET
//new RegExp("\d+") === /\d+/ 正则，所有的都是数字，+出现一次或多次
// 只要部分的比配我们给出的url(处理之前有页数的url问题)
Mock.mock(new RegExp('/vue-element-admin/article/list'), 'get', (config)=>{
    console.log(config);
    // 要实现就输出20条 我们的list要根据params 来取分页
    //怎么到url里面取page和limit
    const { page=1, limit=20,title, author, value} = param2Obj(config.url) //把url存为一个json对象，然后解构出来
    //根据各种可以查询
    let mockList = list.filter(item => {
        // 条件一个个加，
        if (title && item.title.indexOf(title) < 0) return false;
        if (author && item.author.indexOf(author) < 0) return false;
        return true
      });
        if(value) {
          value == 'asc' && mockList.sort((a,b) => a.id - b.id)
          value == 'desc' && mockList.sort((a,b) => b.id - a.id)
        } 
        // .......
        
     

    // console.log(page, limit);
    const pageList = list.filter((item,index) =>index < limit*page && index >= limit*(page-1)); //拿出某页的数据 过滤 为true就是要的
    return {
        // list,
        // list: pageList.sort((a,b)=>{
        //     let s = true
        //     if(sort == "true") {
        //         s = true
        //     } else {
        //         s = false
        //     } 
        //     if(s) {
        //         return parseInt(a.id)-parseInt(b.id)
        //     } else {
        //         return parseInt(b.id)-parseInt(a.id)
        //     }
        // }),
        list: mockList,
        // total: count
        total: mockList.lengths
    }
})
export default Mock