"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-16
 * @modified
 *
 * @description
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @link https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * @solutions
 *
 */

const log = console.log;


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
  let ancestor;
  // DFS 深度优先搜索
  const dfs = (root, p, q) => {
    if (root === null) {
      return false;
    }
    // 递归
    const leftSon = dfs(root.left, p, q);
    const rightSon = dfs(root.right, p, q);
    if ((leftSon && rightSon) || ((root.val === p.val || root.val === q.val) && (leftSon || rightSon))) {
      ancestor = root;
    }
    return leftSon || rightSon || (root.val === p.val || root.val === q.val);
  }
  dfs(root, p, q);
  return ancestor;
};
