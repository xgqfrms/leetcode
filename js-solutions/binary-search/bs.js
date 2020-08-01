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
  let result = -1;
  const len = nums.length;
  if(len < 2) {
    result = nums.indexOf(target);
  } else {
    let mid = nums[Math.floor(len / 2)];
    let left = nums.slice(0, nums.indexOf(mid));
    let right = nums.slice(nums.indexOf(target) + 1, len);
    log(`left`, left)
    log(`right`, right)
    if (mid === target) {
      result = nums.indexOf(target);
    }
    // if (mid > target) {
    //   result = search(left, target);
    // } else {
    //   // mid < target
    //   result = search(right, target);
    // }
  }
  log(`result`, result);
  return result;
};


search([-1,0,3,5,9,12], 9);
// search([-1,0,3,5,9,12], 2);
