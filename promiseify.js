//是node中的一个api
const fs = require('fs');
const util = require('util');

// fs.readFile('./for-map.js', {encoding: 'utf8'}, (err,file)=>{
//     console.log(file); 
// })
//最后是一个回调 这个node的风格
const fsReadFile = util.promisify(fs.readFile);
fs.readFile('./for-map.js', {encoding: 'utf8'})
(err,file)=>{

    console.log(file); 
})