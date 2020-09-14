"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 215. Kth Largest Element in an Array
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @solutions
 *
 */

const log = console.log;


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const arr = nums.sort((a, b) => a - b > 0 ? -1 : 1);
  return arr[k - 1];
};
