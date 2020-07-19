"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-16
 * @modified
 *
 * @description 125. Valid Palindrome
 * @augments
 * @example
 * @link https://leetcode.com/problems/valid-palindrome/
 * @link https://leetcode.com/submissions/detail/368171836/
 *
 */

const log = console.log;

var isPalindrome = function(s = ``) {
  let str = s.trim().toLowerCase();
  let result = false;
  // regular expression
  const reg = /[a-z0-9]/;
  if(s.length <= 1) {
    result = true;
  } else {
    // log(`\nstr =`, str);
    let arr = str.split(``).filter(item => reg.test(item));
    // log(`arr`, arr)
    if(arr.join(``) === arr.reverse().join(``)) {
      result = true;
    }
  }
  log(`\nresult`, result)
  return result;
};


isPalindrome(`A man, a plan, a canal: Panama`);
isPalindrome(`race a car`);
isPalindrome(``);
// number bug?
isPalindrome("0P");
isPalindrome("a.");

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false
