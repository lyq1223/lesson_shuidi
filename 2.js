function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
// const n4 = new TreeNode(null);
const n5 = new TreeNode(4);
n1.left = n2;
n1.right = n3;
// n2.left = n4;
n2.right = n5;

// bfs
// var rightSideView = function(root) {
//     let res = [];
//     let que = [root];
//     while(que.length) {
//         let size = que.length;
//         while(size) {
//             let lastnode = que.shift();
//             if(size === 1) res.push(lastnode.val);
//             if(lastnode.left) que.push(lastnode.left);
//             if(lastnode.right) que.push(lastnode.right);
//             size--; //这个时候，就不能把减减放在while，要在判断完if之后再减
//         }
//     }
//     return res;
// }
// console.log(rightSideView(n1));

// dfs
var rightSideView = function(root) {
    if(!root) return []
    let arr = []
    dfs(root, 0, arr)
    return arr
};
function dfs(root, step, res) {
    if(root) {
        // 当数组长度等于当前 深度 时, 把当前的值加入数组
        if(res.length === step) {
            res.push(root.val);
        }
        // console.log(step, '-------', res)
        dfs(root.right, step + 1, res) // 先从右边开始, 当右边没了, 再轮到左边
        dfs(root.left, step + 1, res)
    }
}