"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-16
 * @modified
 *
 * @description
 * @difficulty Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/sliding-window-maximum/
 * @link https://leetcode-cn.com/problems/sliding-window-maximum/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // slide window
  // nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
  const result = [];
  const len = nums.length;
  for(let i = 0; i < len - k + 1; i++) {
    // copy
    let arr = nums.slice(i, k + i);
    log(`arr =`, arr, i)
    let tempMax = arr.reduce((max, item) => max <= item ? item : max, -1/0);
    log(`max =`, tempMax)
    result.push(tempMax);
  }
  log(`result =`, result)
  return result;
};

const nums = [1,3,-1,-3,5,3,6,7], k = 3;
const test = maxSlidingWindow(nums, k);

// 输出: [3,3,5,5,6,7]


/*

https://leetcode-cn.com/submissions/detail/123944499/testcase/


超出时间限制


*/
