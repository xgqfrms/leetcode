"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-19
 * @modified
 *
 * @description 18. 4Sum
 * @description 18. 四数之和
 * @difficulty Medium
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/4sum/
 * @link https://leetcode-cn.com/problems/4sum/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 四数之和
  const result = [];
  nums.sort();
  log(`nums =`, nums);
  for (let i = 0; i < nums.length; i++) {
    let temp;
    let arr = [];
    for (const item of nums) {
      if(temp !== target) {
        temp += item;
        arr.push(item);
      }
      if(temp === target) {
        result.push(arr);
        break;
      }
    }
  }
  return result;
};


const nums = [1, 0, -1, 0, -2, 2], target = 0;
const test = fourSum(nums, target);

log(`test ok =`, test);


/*

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1, 0, 0, 1],
  [-2, -1, 1, 2],
  [-2, 0, 0, 2]
]

*/
