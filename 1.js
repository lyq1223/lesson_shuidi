var maxSubArray = function(nums) {
    // 解法1：
    // let res = [], list = [];
    // let sum=0;
    // for(let i = 0; i < nums.length; i++) { 
    //     // sum += nums[i];
    //     // console.log(sum, '====');
    //     if(sum < 0) {
    //         list.splice(0, i + 1)
    //         sum = 0;
    //     }
    //     list.push(nums[i]);
    //     sum += nums[i];
    //     // console.log(sum, '==sum')
    //     // console.log(list);  
    //     res.push(sum);       
    // }
    // var max = Math.max.apply(null, res);
    // return max;

    // 解法2，动态规划
    // 前一个元素大于0（计算的和），将其加到当前元素上
    let pre = 0, maxAns = nums[0];
    nums.forEach(element => {
        pre = Math.max(pre + element, element);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// let ans = nums[0];
    // let sum = 0;
    // for(const num of nums) {
    //     if(sum > 0) {
    //         sum += num;
    //     } else {
    //         sum = num;
    //     }
    //     ans = Math.max(ans, sum);
    // }
    // return ans;