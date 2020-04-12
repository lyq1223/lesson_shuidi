const fs = require('fs');
const path = require('path');

// console.log(process.cwd())  //process.cwd拿到项目的根目录的物理路径
console.log(fs.readdirSync(path.join(
    process.cwd(),
    'src'
)))