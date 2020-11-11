"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description 633. Sum of Square Numbers
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/sum-of-square-numbers/
 * @link https://leetcode-cn.com/problems/sum-of-square-numbers/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  if (c <= 2) {
    return true;
  }
  let result = false;
  let len = 0;
  let temp = c;
  while (temp > 3) {
    len += 1;
    for (let i = 0; i < len; i++) {
      let b = Math.floor(temp / 2);
      for (let j = 0; j <= b; j++) {
        if ((i ** 2 + b ** 2) === c) {
          result = true;
        }
      }
    }
    temp -= 1;
  }
  return result;
};


/*
Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
Example 3:

Input: c = 4
Output: true
Example 4:

Input: c = 2
Output: true
Example 5:

Input: c = 1
Output: true */

