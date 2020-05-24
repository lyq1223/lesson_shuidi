var permute = function(nums) {
    // let res = [];
    const res = [];
    backtrack(res, [], nums);
    return res;

};
//回溯
function backtrack(res, temList, nums) {
    //退出条件
    if (temList.length === nums.length) return res.push([...temList]);

    //判断回溯
    for(let i = 0; i < nums.length; i++) {
        //因为这个给定的数组是个不重复的，所以只需要判断是否存在某个nums中的值即可
        if(temList.includes(nums[i])) continue;
        temList.push(nums[i]);
        //每次插进去一个，就能再回溯一次，看是不是长度已经满足了一个结果数组
        backtrack(res, temList, nums);
        // 能回溯，然后return出来，说明已经成功在结果数组中将上一轮的temList加进去了，那就把temList清空
        temList.pop();
    }
}
console.log(permute([1,2,3]));