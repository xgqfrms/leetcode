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

var isPalindrome = function(s = ``) {
  let str = s.trim().toLowerCase();
  let result = false;
  // regular expression
  const reg = /[a-z]/ig;
  // const dict = `abcdefghijklmnopqrstuvwxyz`;
  // const begin = `a`.charCodeAt();
  // const end = `z`.charCodeAt();
  // let dict = ``;
  // for (let i = begin; i < end; i++) {
  //   dict += String.fromCharCode(i);
  //   // dict += String.fromCodePoint(i);
  // }
  // log(`dict =`, dict);
  // dict = abcdefghijklmnopqrstuvwxy
  // `a`.charCodeAt();
  // 97
  // `z`.charCodeAt();
  // 122
  // `A`.charCodeAt();
  // 65
  // `Z`.charCodeAt();
  // 90
  const len = str.length;
  if(len <= 1) {
    result = true;
  } else {
    let temp = ``;
    for (let i = 0; i < len; i++) {
      if(reg.test(str[i])) {
        temp += str[i]
      }
    }
    let reverse = temp.split(``).reverse().join(``);
    log(`str =`, str)
    log(`temp =`, temp)
    log(`reverse =`, temp)
    if(reverse === temp) {
      result = true;
    }
  }
  log(`\nresult`, result)
  return result;
};


isPalindrome(`A man, a plan, a canal: Panama`);
isPalindrome(`race a car`);
isPalindrome(``);

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false
