- 数据可视化
- 使用requestAnimationFrame 请求运动帧  
游戏开发中使用requestAnimationFrame 来代替setInterval
function animation() {
    console.log('---汪')；
    requestAnimationFrame(function(){
        animation(); //递归（通过自己调用自己）一直调用会出现内存泄露
    })
    
}
animation();
