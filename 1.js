// 大小为n的数组吗，其中的多数元素，重复的数据出现次数大于n/2 majority
// [3,2,3]  3 也就是至少一半数据是这个majority,可以假设数组不为空，总是有多数元素
// [1,2,3]不会存在这种情况，并且给定的数组总是存在多数元素即也不有[1,2,2,3,3,4]

// for 用一个字典json，再加一个最大值max 空间复杂度O(n),时间复杂度也是
//选举算法
var majorityElement = function(nums){
    let count = 1, //计数
    majority = nums[0];//不知道哪个是majority那就先假设一个
    //算法回归运算，
    for(let i=1; i<nums.length; i++){
        //如果再出现这个数，count++
        //不一样的数，count--
        //如果count都为0了，那就不是这个数，就让majority = 那个数
        // 让不一样的数被消灭，然后选举出来的n/2
        // 从这里投票，相等就加一
        if(count == 0){
            majority = nums[i];
        }
        if(nums[i] === majority){
            count++;
        }else{
            count--;
        }        
    }
    return majority;
}
console.log(majorityElement([1,1,1,2,2,2,2,3])); 