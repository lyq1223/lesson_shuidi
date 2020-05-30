// 贪心
var mincostTickets = function(days, costs) {
    let dp = new Array(366 + 30).fill(0);
   
    // 倒着数日子
    let n = days.length;
    let k = n - 1;
     // 记录必须要出行的最大的日子，和最小的日子
     let maxDate = days[n - 1];
     let minDate = days[0];

    // 非必要时候，不出行
    for(let i = maxDate; i >= minDate; i--) {
        // 倒着比对必须出行的日子
        if( i === days[k]) {
            // 决定使用几天的
            dp[i] = Math.min(dp[i + 1] + costs[0],
                             dp[i + 7] + costs[1],
                             dp[i + 30] + costs[2]
            );
            k--;
        } else {
            dp[i] = dp[i + 1];
        }        
    }
    return dp[minDate];
};
console.log(mincostTickets([1,4,6,7,8,20], [2,7,15]));