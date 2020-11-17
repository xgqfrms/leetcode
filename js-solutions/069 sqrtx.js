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


/*
// binary search bug

// 8 undefined

var mySqrt = function(x) {
  if (x < 2) {
    return x;
  }
  let left = 1;
  let right = x;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid ** 2 === x) {
      return mid;
    } else if (mid ** 2 > x) {
      right = mid;
    } else if (mid ** 2 < x) {
      left = mid + 1;
    }
  }
  return left - 1;
}
*/
