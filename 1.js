var maxDepthAfterSplit = function(seq) {
    let dep = 0;
    //map() 方法返回一个新数组，不会改变原始数组。同时新数组中的元素为原始数组元素调用函数处理后的值，并按照原始数组元素顺序依次处理元素。

    // 注意：map() 不会对空数组进行检测。所以要先处理。
    //item 当前元素的值（必选），index当前索引值（可选）
    //碰到"("深度加一，(深度为奇数就记为1，为偶数就记为0);碰到,")"先记录下深度%2，再将深度减一return 先前记录下来的dep%2
    //为(深度加一，
    return seq.split("").map((item,index)=>{
        if(item === '(') { 
            ++dep;
            return dep % 2;
        } else {  //碰到")"
            let tmp = dep % 2; //)的深度 肯定跟前面与之对应的(的相同，放入数组中，是为一还是为零而和前面的(的 一致，都为dep % 2
            --dep;  //降深度
            return tmp;
        }
    });
    // return seq;
};
console.log(maxDepthAfterSplit("()(())()"));
console.log(maxDepthAfterSplit("(()())"));