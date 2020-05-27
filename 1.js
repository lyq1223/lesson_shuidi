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

var rightSideView = function(root) {
    // 如果是个空树
    if(!root) {
        return []
    }
    let res = []; //放结果
    let queue = [];//放临时遍历的结点
    // 从根节点开始，先把root放进queue
    queue.push(root);
    //只要还有结点就一直遍历
    // let lastNode = new TreeNode();

    while(queue.length) {
        // 将该层的第一个结点放进res中
        res.push(queue[0].val);
        //这一层有几个结点
        let size = queue.length;
        while(size--) {
            //遍历到的当前节点，将它的孩子节点放入队列中（下一层），并将该节点出队
            let lastNode =  queue.shift();
            if(lastNode.right) queue.push(lastNode.right);
            if(lastNode.left) queue.push(lastNode.left);
        }
    }
    return res;
};
console.log(rightSideView(n1));
// console.log(n1);

// 如果找左节点
var leftSideView = function(root) {
    if(!root) return [];
    //记录结果的数组
    let res = [];
    //记录每一层结点的数组
    let queue = [];
    queue.push(root);
    while(queue.length){
        res.push(queue[0].val);
        //用来遍历一层节点
        let size = queue.length;
        while(size--) {
            // 出第一个，放孩子
            let lastNode = queue.shift();
            if(lastNode.left) queue.push(lastNode.left);
            if(lastNode.right) queue.push(lastNode.right);
        }
    }
    return res;
}
console.log(leftSideView(n1));