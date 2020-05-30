
var hasGroupsSizeX = function(deck) {
    
//解法一
//     let map = new Map();
//     deck.forEach(element => {
//         map.set(element,map.has(element) ? map.get(element)+1 : 1)
//     });
//     let mapArr = [...map.values()];
//     let max = 0;
//     for(let i=0; i< mapArr.length; i++){
//         max = Math.max(max,mapArr[i])
//     }
//     let x = 2;
//     while (x <= max) {
//         if(mapArr.every(ele => ele%x == 0)) return true
//         x++;
//     }
//     return false

//     //用最大公约数 辗转相除法
// };
// // console.log(hasGroupsSizeX([1,1,2,2,2,2]));
// console.log(hasGroupsSizeX([1,1,1,2,2,3,3]));

//解法二 最大公约数，辗转相除法


//思路一错错错
// let count = deck.length;
// let set = new Set(deck);
// // set.add(deck);
// let size = set.size;
// if (count%size === 0){
//     return true
// } else {
//     return false
// }
