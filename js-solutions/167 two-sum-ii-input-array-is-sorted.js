"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-19
 * @modified
 *
 * @description 167. 两数之和 II - 输入有序数组
 * @description 167. Two Sum II - Input array is sorted
 * @difficulty Easy
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @link https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  // 空间换时间
  const obj = {};
  // HashMap
  for(let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if(obj[nums[i]] !== undefined) {
      result = [obj[nums[i]], i];
      break;
    } else {
      obj[temp] = i;
    }
  }
 return result.sort().map(i => i + 1);
};


/*

// error
const test1 = isValid(`((}}`);
// ok
const test2 = isValid(`()[]{}`);

log(`❌test =`, test1 ? `✅` : `❌`);
log(`✅test ok =`, test2 ? `✅` : `❌`);

*/
