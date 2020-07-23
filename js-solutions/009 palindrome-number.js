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
    const len = Math.ceil(Math.log10(num + 1));
    if (len <= 1) {
      return true;
    } else {
      // 双指针
      let left;
      let right;
      // num to array ???
      // 123 => [1, 2, 3];
    }
  }
};

function NumberToArray(num = 1) {
  const result = [];
  const len = Math.ceil(Math.log10(num + 1));
  let temp = num;
  for (let i = len; i > 0; i--) {
    log(`\ntemp 1`, temp, len)
    // 四舍五入 bug
    log(`value =`, parseInt(temp / Math.pow(10, i - 1)), Math.pow(10, i - 1))
    result.push(parseInt(temp / Math.pow(10, i - 1)));
    log(`result[len - i]`, result[len - i], len - i, len, i)
    log(`result[len - i] * Math.pow(10, i - 1)`, result[len - i] * Math.pow(10, i - 1))
    temp -= result[len - i] * Math.pow(10, i - 1);
    log(`temp`, temp)
  }
  // for (let i = len; i > 0; i--) {
  //   log(`\ntemp 1`, temp, len)
  //   // Math.round 四舍五入 bug
  //   log(`value =`, Math.round(temp / Math.pow(10, i - 1)), Math.pow(10, i - 1))
  //   result.push(Math.round(temp / Math.pow(10, i - 1)));
  //   log(`result[len - i]`, result[len - i], len - i, len, i)
  //   log(`result[len - i] * Math.pow(10, i - 1)`, result[len - i] * Math.pow(10, i - 1))
  //   temp -= result[len - i] * Math.pow(10, i - 1);
  //   log(`temp`, temp)
  // }
  // for (let i = len; i > 0; i--) {
  //   log(`num % (i * 10)`, parseInt(num / Math.pow(10, i - 1)), Math.pow(10, i - 1))
  //   result.push(parseInt(num / Math.pow(10, i - 1)));
  // }
  return result;
}

// const test = NumberToArray(123);
// const test = NumberToArray(1234);
// const test = NumberToArray(12345);
const test = NumberToArray(1234567);

log(`test`, test)


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