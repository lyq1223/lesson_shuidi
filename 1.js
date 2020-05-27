var maximalSquare = function(matrix) {
    let row = matrix.length, col = matrix[0].length;
    if(row == 0 || col == 0) {
        return 0;
    }
    let maxlen = 0;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] == "1") {
                maxlen = max(maxlen, 1);
                // 左上角为1，就开始在左，下两边找还有没有为1的，因为是正方形，所以要取宽高中最短的那边
                curmax = min(row - i, col - j);
                // 开始每次以一行，一列开始找
                for(let k = 1; k < curmax; k++) {
                    let flag = true;
                    // 先找对角线，之后好找范围
                    if(matrix[i + k][j + k] == "0") {
                        break;
                    }
                    // 找对角线里面的
                    for(let m = 0; m < k; m++) {
                        if(matrix[i + k][j + m] == "0" || matrix[i + m][j + k] == "0") {
                            flag = false;
                            break;
                        }
                    }
                    if(flag) {
                        maxlen = Math.max(maxlen, k+1);
                    } else {
                        break;
                    }
                }
            }
        }
    }
    return maxlen * maxlen;
};
function max(x,y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}
function min(x,y) {
    if(x < y) {
        return x;
    } else {
        return y;
    }
}
console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));