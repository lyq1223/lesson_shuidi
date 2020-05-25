// 异或运算^
var singleNumber = function(nums) {
    let res = 0;
    for(let i of nums) { //of是遍历value in是遍历key
        res ^=i;
    }
    return res;
};
console.log(singleNumber([4, 2, 2]));
// 异或运算，相同为0，不同为1,巧妙之处，一次异或得到的最终的值只能是只出现一次的（在其余都出现两次时）