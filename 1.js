var maxDistance = function(grid) {
    
    var land = [];
    var ocean = [];
    //1. 找出海洋和陆地
    //2. 找到每个海洋到陆地的最短距离
    //3. 找到最短距离中的最大值
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++){
            if( grid[i][j] === 1) {
                land.push([i, j]);
            } else {
                ocean.push([i, j]);
            }
        }
    }
    var max = -1;
    // 如果全是海洋或者全是陆地
    if(land.length == 0 || ocean.length == 0) {
        return -1;
    }
    //每片海洋到陆地的距离中最短的距离
    for(let i = 0; i < ocean.length; i++) {
        var min = 9999;
        for(let j = 0; j < land.length; j++) {
            //曼哈顿距离 ？？？？
            let dis = Math.abs(ocean[i][0] - land[j][0]) + Math.abs(ocean[i][1]-land[j][1]);
            
            if(dis < min) {
                min = dis;
            } 
            //发现已经有min是1了，那不用再算了，最小的就是1，直接退出
            if(min == 1) {
                break;
            }
        }
        if(max < min) {
            max = min;
        }
    }
    return max
    // return grid[mi][mj];
};


console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]));