"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-16
 * @modified
 *
 * @description 22. Generate Parentheses
 * @description 22. 产生括号 ✅
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/generate-parentheses/
 * @link https://leetcode-cn.com/problems/generate-parentheses/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // 括号组合
  const result = [];
  // DFS, 深度优先搜索
  dfs(0, 0, n, ``);
  function dfs(left, right, n, temp) {
    if (left === n && right === n) {
      result.push(temp);
    }
    if (left < n) {
      // 左括号, 递归
      dfs(left + 1, right, n, temp + `(`);
    }
    if (left > right && right < n) {
      // 右括号, 递归
      dfs(left, right + 1, n, temp + `)`);
    }
  }
  return result;
};



/*
输入：n = 3
输出：[
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
*/
