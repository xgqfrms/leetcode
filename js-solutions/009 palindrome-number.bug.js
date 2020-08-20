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
//         return true;
//     }
//   }
//   return false;
// };


// Math.ceil(Math.log10(1 + 1));
// // 1
// Math.ceil(Math.log10(0 + 1));
// // 0


const DigitsArrayToNumber = (arr = []) => {
  let result = 0;
  let len = arr.length;
  if(len > 2) {
    while (len > 0) {
      // log(`arr.pop(len - 1)`, arr.pop(len - 1))
      // log(`\nlen =`, len)
      // log(`arr[len - 1]`, arr[len - 1])
      // log(`Math.pow(10, len - 1)`, Math.pow(10, len - 1))
      result += arr[len - 1] * Math.pow(10, len - 1);
      len--;
    }
  } else {
    const [x, y] = arr;
    result = x * 10 + y;
    // log(`result`, result)
  }
  return result;
}

const NumberToDigitsArray = (num = 1) => {
  const result = [];
  while (num > 0) {
    result.push(num % 10);
    num = parseInt(num / 10);
  }
  return result;
}



const NumberToNumberArray = (num = 1) => {
  const result = [];
  const len = Math.ceil(Math.log10(num + 1));
  let temp = num;
  for (let i = len; i > 0; i--) {
    result.push(parseInt(temp / Math.pow(10, i - 1)));
    temp -= result[len - i] * Math.pow(10, i - 1);
  }
  return result;
}

// const test = NumberToNumberArray(1234567);
// const test = NumberToDigitsArray(1234567);

// log(`test`, test)

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if(num < 0) {
    return false;
  } else {
    const len = Math.ceil(Math.log10(num + 1));
    // log(`len`, len)
    if (len <= 1) {
      return true;
    } else {
      // 双指针
      // let left;
      // let right;
      // num to array ???
      // 123 => [1, 2, 3];
      // const arr = NumberToNumberArray(num).reverse();
      // log(`num`, num)
      // const arr = NumberToDigitsArray(num);
      // log(`arr`, arr)
      // const temp = DigitsArrayToNumber(arr);
      // log(`temp`, temp)
      const temp = DigitsArrayToNumber(NumberToDigitsArray(num));
      if(num === temp) {
        return true;
      } else {
        return false;
      }
    }
  }
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
