var merge = function(intervals) {
    if(intervals.length<=0) {
        return [];
    }
    intervals.sort((a,b) => a[0] - b[0]);
    // intervals.sort(function(a,b) {
    //     return a[0]-b[0];
    // })
    let res = [intervals[0]];
    for(let i = 0; i < intervals.length; i++) {
        if(res[res.length-1][1] >= intervals[i][0]) {
            //当后一项的左边界<=前一项的右边界 即说明有相交
            //合并的时候，右边取最大的那个
            res[res.length-1][1] = Math.max(intervals[i][1], res[res.length-1][1])
        }
        else {
            //不能合并，存进结果中
            res.push(intervals[i])
        }
    }
    return res;
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));