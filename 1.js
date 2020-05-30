var sortArray = function(nums) {
    for(let i=0; i<nums.length -1; i++) {
        for(let j = 0; j < nums.length -1 -i; j++) {
            if(nums[j] > nums[j+1]) {
                var tmp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = tmp;
            }
        }
    }
    return nums
};
console.log(sortArray([5,1,1,2,0,0]));