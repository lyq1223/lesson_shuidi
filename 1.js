var getMaxRepetitions = function(s1, n1, s2, n2) {
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let index = 0;
    let res = 0;
    if(arr1.length < arr2.length) {
        return 0;
    }
    //有n1个s1,所以循环n1次，就能匹配到相应长度的s1
    for(let j = 0; j < n1; j++){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] === arr2[index]) { //依次匹配arr2中的字符，
                index++
            }
            if(index === arr2.length) {
                index = 0;
                res++;
            }
        }
    }
    return parseInt(res/n2);
};
console.log(getMaxRepetitions("acb",4,"ab",2));