var surfaceArea = function(grid) {

    //初始化表面积
    var surfaceAreaCount = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j=0; j < grid.length; j++)
        {
            //该位置立方体的个数
            var count = grid[i][j];

            //该位置上0个立方体
            if(!count) {
                continue;
            }
            //有立方体
            if(count >= 0) {
                surfaceAreaCount += 2 + 4 * count;
            }

            //减去重叠部分
            //左边有
            if(i-1 >= 0) {
                surfaceAreaCount -= Math.min(count, grid[i-1][j]);
            }
            //右边有 注意是小于横坐标的最右边
            if(i+1 < grid.length) {
                surfaceAreaCount -= Math.min(count, grid[i+1][j]);
            }
            //上边有
            if(j-1 >= 0) {
                surfaceAreaCount -= Math.min(count, grid[i][j-1]);
            }
            //下边有，注意是小于纵坐标的最下面
            if(j+1 < grid.length) {
                surfaceAreaCount -= Math.min(count, grid[i][j+1]);
            }
        } 
    }
    return surfaceAreaCount
}
console.log(surfaceArea([[1,2],[3,4]]));