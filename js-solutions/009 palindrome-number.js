"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-23
 * @modified
 *
 * @description 9. Palindrome Number
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/palindrome-number/
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
 * @solutions
 *
 */

const log = console.log;


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if(num < 0) {
    return false;
  } else {
    // 双指针
    const len = Math.ceil(Math.log10(num + 1));
  }
};


// Math.ceil(Math.log10(1 + 1));
// // 1
// Math.ceil(Math.log10(0 + 1));
// // 0

/*

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Could you solve it without converting the integer to a string?

*/
