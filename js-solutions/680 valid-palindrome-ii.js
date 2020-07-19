"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-18
 * @modified
 *
 * @description 680. Valid Palindrome II
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s = ``) {
  let result = true;
  if(s.length > 2) {
    let temp = [];
    let exist = [];
    let str = s.split(``).sort().join(``);
    for (let i = 0; i < str.length; i++) {
      if(!temp.includes(str[i])) {
        temp.push(str[i])
      } else {
        exist.push(str[i])
      }
    }
    log(`temp`, temp)
    log(`exist`, exist)
    if(temp.length - exist.length > 2) {
      result = false;
    }
  }
  log(`result`, result);
  return result;
};

// const test = "aefgbca";
// const test2 = "abca";
// const test3 = "abbdc";

// bug ???
const test4 = "tebbem";// false
// "tebbem" => "ebbem" "tbbem" "tebem" "tebem" "tebbm" "tebbe"

// validPalindrome(test);
// validPalindrome(test2);
// validPalindrome(test3);

validPalindrome(test4);
