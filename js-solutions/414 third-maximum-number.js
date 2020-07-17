"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-17
 * @modified
 *
 * @description 414. Third Maximum Number
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/third-maximum-number/
 * @solutions https://leetcode.com/submissions/detail/367783973/
 *
 */

const log = console.log;


var thirdMax = function(nums) {
  log(`\nnums`, nums)
  const arr = [...new Set(nums)].sort((a, b) => b - a);
  const len = arr.length;
  log(`arr`, arr)
  let result;
  if(len < 3) {
    result = arr[0];
  } else {
    result = arr[2];
  }
  log(`\nresult =`, result)
  return result;
};



const test = [3, 2, 1];
// 1
const test2 = [1, 2];
// 2
const test3 = [2, 2, 3, 1];
// 1

const test4 = [1, 1, 2];
// 2

thirdMax(test)
thirdMax(test2)
thirdMax(test3)

thirdMax(test4)
// 2
// result = undefined


// very slowly
// var thirdMax = function(nums) {
//   const arr = nums.sort((a, b) => b - a).filter((item, i) => arr.indexOf(item) === i);
//   if(arr.length < 3) {
//     return arr[0];
//   } else {
//     return arr[2];
//   }
// };
