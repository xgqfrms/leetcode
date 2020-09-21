"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-21
 * @modified
 *
 * @description 344. Reverse String
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/reverse-string/
 * @link https://leetcode-cn.com/problems/reverse-string/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let len = Math.floor(s.length / 2);
  if(s.length % 2 === 0) {
    len -= 1;
  }
  for(let i = 0; i <= len; i++) {
    // ES6 swap, more faster 🚀
    [
      s[s.length - i - 1],
      s[i],
    ] = [
      s[i],
      s[s.length - i - 1],
    ];
    // const temp = s[i];
    // s[i] = s[s.length - i - 1];
    // s[s.length - i - 1] = temp;
  }
  // return Array.from(s).reverse().join(``);
};
