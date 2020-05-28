/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q) {
        return root; //是自己
    }
    let left = lowestCommonAncestor(root.left,p, q);
    let right = lowestCommonAncestor(root.right, p,q);
    if(left != null && right !=null) {
        return root; //在左子树和右子树
    }
    return left != null? left : right;
};