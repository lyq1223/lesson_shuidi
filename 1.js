
var maxProduct = function(nums) {
    // 用最大子序和？
    // const memo = [];
    // memo[0] = nums[0];
    // let max = nums[0];
    // for(let i = 1; i < nums.length; i++) {
    //     memo[i] = Math.max(nums[i] * memo[i - 1], nums[i]);
    //     max = Math.max(max, memo[i]);
    // }
    // 但是乘积牵扯到一个负负得正的问题，不能这么算
    const maxProduct = [];
    const minProduct = [];
    // 然后是给数组中的元素赋值
    maxProduct[0] = nums[0];
    minProduct[0] = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length;i++) {
        maxProduct[i] = Math.max(nums[i], nums[i] * nums[i - 1], nums[i] * minProduct[i - 1]);
        minProduct[i] = Math.min(nums[i], nums[i] * nums[i - 1], nums[i] * minProduct[i - 1]);
        max = Math.max(max, maxProduct[i]);
    }

    return max;
}
console.log(maxProduct([1,2,-1,-3]));