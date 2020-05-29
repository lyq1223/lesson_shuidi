var superEggDrop = function(K, N) {
    let dp = Array(K + 1).fill(0).map(()=>new Array(N + 1).fill(0));
    // console.log(dp);
    //i是有i个鸡蛋，j是j次扔鸡蛋的测得的最多楼层
    //用i,j反求N
    for(let j = 1; j <N; j++){
        for(let i = 1; i< K; i++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j] + 1;
            if(dp[i][j] >= N) {
                return j
            }
        }
    }
    return N;
};
console.log(superEggDrop(5,6))