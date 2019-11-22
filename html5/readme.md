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

- canvas 是画布
绘制API 画布默认大小？
canvas.style.width 标准的 100vw
canvas.width html 属性 不接受单位，只接受数值
canvas,getContext('2d');
ctx.fillstyle = 'red';
ctx.fillText(2,100,100)
requestAnimation + clearRect();
