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
 *
 */

const log = console.log;

var isPalindrome = function(s) {
  let result = false;
  const reg = /[a-z]/ig;
  const dict = `abcdefghijklmnopqrstuvwxyz`;
  const begin = `a`.charCodeAt();
  const end = `z`.charCodeAt();
  const dict = ``;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

  }
  // `a`.charCodeAt();
  // 97
  // `z`.charCodeAt();
  // 122
  // `A`.charCodeAt();
  // 65
  // `Z`.charCodeAt();
  // 90
  if(len <= 1) {
    result = true;
  } else {
    let temp = ``;
    for (let i = 0; i < s.length; i++) {
      if(reg(s[i])) {
        temp += s[i]
      }
    }
  }
  return result;
};

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false
