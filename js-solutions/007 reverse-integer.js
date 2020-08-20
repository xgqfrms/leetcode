"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
 * @modified
 *
 * @description 7. Reverse Integer
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

// reverse-integer


/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

*/

/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(-(2**31) > x || x > 2**31) {
    return 0;
  } else {
    const num = parseInt(Array.from(`${x}`).reverse().join(``));
    if(-(2**31) > num || num > 2**31) {
      return 0;
    } else {
      if(x > 0) {
        return num;
      }
      return -num;
    }
  }
};

// 1534236469

