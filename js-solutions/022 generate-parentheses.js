"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-16
 * @modified
 *
 * @description generate-parentheses
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
  for(let i = 0; i < n; i++) {
    let temp = ``;
    for(let j = 0; j < n; j++) {
      temp += `()`;
    }
    result.push(temp);
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
