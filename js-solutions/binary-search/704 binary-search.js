"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-30
 * @modified
 *
 * @description 704. Binary Search
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/binary-search/
 * @solutions
 *
 */

const log = console.log;

/*

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(!nums.length) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // left + 差值
    let mid = left + Math.floor((right - left) / 2);
    // log(`mid`, nums[mid])
    if(nums[mid] === target) {
      // nums[mid] 值
      // return nums.indexOf(nums[mid]);
      return mid;
      // return true;
    } else if(nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
  // return false;
};


const test = search([-1,0,3,5,9,12], 9);
const test1 = search([-1,0,3,5,9,12], 2);

log(test)
log(test1)
// 4
// -1
