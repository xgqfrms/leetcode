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


// var isPalindrome = function(num) {
//   if(num > -1) {
//     const arr = Array.from(`${num}`);
//     if(arr.join() === arr.reverse().join()) {
//       return true;
//     }
//   }
//   return false;
// };


var isPalindrome = function(num) {
  return (num < 0) ? false : Array.from(`${num}`).join() === Array.from(`${num}`).reverse().join();
};


// const test = isPalindrome(123);
// const test1 = isPalindrome(-123);
// const test2 = isPalindrome(10);
// const test3 = isPalindrome(11);
const test4 = isPalindrome(100);

// log(`test`, test)
// log(`test1`, test1)
// log(`test2`, test2)
// log(`test3`, test3)
log(`test4`, test4)


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
