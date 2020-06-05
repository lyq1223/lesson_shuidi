// 1.
// var minCount = function(coins) {
//     let res = 0;
//     for(let i = 0; i<coins.length; i++) {
//         if(coins[i] % 2 === 0) {
//             res += coins[i] / 2
//         }
//         else {
//             res += Math.floor(coins[i] / 2) +1
//             // console.log(res);
//         }
//     }
//     // res +=res;
//     return res;
// };
// // console.log(minCount([2,3,10]));
// console.log(minCount([4,2,1]));



// 2.1错
// var numWays = function(n, relation, k) {
    
//     relation.sort((a, b)=> a[0]-b[0]);
   
//     let res = [relation[0]];
    
//     for(let i = 0; i < relation.length; i++) {
//      for( let j=0; j<k; j++){
//         if(res[res.length - 1][1] === relation[i][0] && k >= 0) {
//             res[res.length-1][1] = relation[i][1];
//             k--;
//         }            
//     }
//         if(res[res.length-1][1] === n-1 && k === 0) {
//             res.push(relation[i]);            
//         }
//     }
//     return res;
// };


// 2.
// var numWays = function(n, relation, k) {
//     const result = [];
//     for (let i = 0; i <= k; i++) {
//         result.push(new Array(n).fill(0));
//     }
//     result[0][0] = 1;
//     for (let i = 1; i <=k; i++) {
//         for (let j = 0; j < relation.length; j++) {
//             result[i][relation[j][1]] += result[i - 1][relation[j][0]];
//         }
//     }
//     return result[k][n - 1];
// };
// console.log(numWays(3,[[0,2],[2,1]],2));
// console.log(numWays(5, [[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]], 3));