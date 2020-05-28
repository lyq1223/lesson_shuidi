
var lengthOfLIS = function(nums){
    var lengthL=[1]; //最大序列长度
    if(nums.length==0)
        return 0;    
    for(var i=1;i<nums.length;i++){ //ii用来计算序列长度
        var res=1;
        for(var ii=0;ii<i;ii++){
            if(nums[ii]<nums[i]){
                res=Math.max(res,lengthL[ii]+1);
                console.log(lengthL[ii]+'=====')
            }
        }
        lengthL[i]=res;
    }
    console.log(lengthL);
    return Math.max(... lengthL);//lengthL中的最大值
}
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([4,10,4,3,8,9]));

// if(nums[i+1] > nums[i]){
        //     lengthL.push(nums[i+1]);
        // } else {
            
        //     count = Math.max(count,lengthL.length+1);

        //     lengthL.splice(0,lengthL.length);
        // }
