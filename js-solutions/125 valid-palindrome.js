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
  // ✅ before filter length
  if(s.length <= 1) {
    result = true;
  } else {
    // log(`\nstr =`, str);
    let temp = ``;
    for (let i = 0; i < str.length; i++) {
      if(reg.test(str[i])) {
        // log(`str[${i}]`, str[i])
        temp += str[i];
      } else {
        // log(`ignore str[${i}]`, str[i])
      }
    }
    // 二分法
    // let l = temp.length;
    // let j = 0;
    // while (l/2 >= j && !result) {
    //   j++;
    //   if(temp[j] === temp[l - j - 1]) {
    //     result = true;
    //   }
    // }
    // 二分法
    // let l = temp.length;
    // let ll = l % 2 > 0 ? Math.floor(l / 2) - 1 : Math.floor(l / 2);
    // for (let j = 0; j < ll; j++) {
    //   // log(`temp[j] =`, temp[j])
    //   // log(`temp[l - j - 1] =`, temp[l - j - 1])
    //   if(temp[j] === temp[l - j - 1]) {
    //     result = true;
    //   } else {
    //     result = false;
    //   }
    // }
    let reverse = temp.split(``).reverse().join(``);
    log(`temp =`, temp)
    log(`reverse =`, reverse)
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
// number bug?
isPalindrome("0P");
isPalindrome("a.");

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Input: "race a car"
// Output: false
