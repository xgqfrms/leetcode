"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-16
 * @modified
 *
 * @description 151. Reverse Words in a String
 * @difficult Medium
 * @augments
 * @example
 * @link https://leetcode.com/problems/reverse-words-in-a-string/
 *
 */

const log = console.log;


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.trim().split(` `);
  const result = arr.filter(item => item.length).map(item => item.trim()).reverse().join(` `);
  return result;
};

/*

reverseWords("the sky is blue");
// "blue is sky the"

reverseWords("  hello world!  ");
// "world! hello"

reverseWords("a good   example");
// "example   good a"


*/
