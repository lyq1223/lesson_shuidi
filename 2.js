function max(x, y) {
    if(x > y) {
        return x;
    }
    return y;
}

var jump = function(nums) {
    // 贪心算法，正向查找最远位置
    let step = 0;
    let maxposition = 0;
    let end = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        // 当前能够到达的最大下标位置，记为边界,我们从左到右遍历数组，到达边界时，更新边界并将跳跃次数增加 1。
        maxposition =max(maxposition, i + nums[i]);
        // 更新位置和步数
        if(i === end ){
            end = maxPosition
            steps++
        }
    }
};
console.log(jump([2,3,1,1,4]));