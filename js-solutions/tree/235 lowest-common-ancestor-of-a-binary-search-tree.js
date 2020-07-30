"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-30
 * @modified
 *
 * @description 235. Lowest Common Ancestor of a Binary Search Tree
 * @description 235. 二叉搜索树的最低共同祖先
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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

};


/*

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

    6
   / \
  2   8
 / \  / \
0  4  7  9
  / \
 3   5

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

*/
