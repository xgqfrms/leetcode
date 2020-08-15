"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-015
 * @modified
 *
 * @description 136 single-number
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;


/*

输入: [2,2,1]
输出: 1

输入: [4,1,2,1,2]
输出: 4

*/


/*
Bit Manipulation Concept

If we take XOR of zero and some bit, it will return that bit
a \oplus 0 = aa⊕0=a
If we take XOR of two same bits, it will return 0
a \oplus a = 0a⊕a=0
a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
So we can XOR all bits together to find the unique number.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = 0;
  for (const i of nums) {
    a ^= i;
  }
  return a;
};
// Time complexity : O(n)
// Space complexity : O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   return nums.reduce((sum, i) => sum ^ i, 0);
// };

const test = [2,2,1];
const result = singleNumber(test);
log(`result =`, result)

const test2 = [4,1,2,1,2];
const result2 = singleNumber(test2);
log(`result2 =`, result2)

