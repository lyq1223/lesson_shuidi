// 类型 number 数值型 整数和浮点数没有区分 都是number类型
// 字符串类型
let arr = [];
let nums = '631758924';
arr.push(nums[0]);
let c = nums[1];
nums = nums.toString(2);
nums += c;
//weile 规律
console.log(nums); //typeof 运算符
// 1.第一位删除
// 2.第二位移到最后面 
