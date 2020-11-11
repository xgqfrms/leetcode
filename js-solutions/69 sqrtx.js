"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description 69. Sqrt(x)
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/sqrtx/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let result = 0;
  while(result ** 2 <= x) {
    result += 1;
  }
  if(result ** 2 > x) {
     result -= 1;
  }
  return result;
};
