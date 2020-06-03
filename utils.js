const fs = require('fs');
const util = require('util');

// readFile是一个异步的方法
module.exports = {
    readFile: util.promisify(fs.readFile) //来自node的util模块//node内置的Promiseify//变成一个Promise
}