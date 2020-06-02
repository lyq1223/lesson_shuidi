// 只要数据在这里输出了 就成功
module.exports = {
    // 格式化输出
    JsonBody: { // 这个名字对应上面 Controller 注释的@response 的 JsonBody。
        result: { type: 'string' }, // 服务器返回的数据。 //约束一下返回的东西的类型
    },
};