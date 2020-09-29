"use strict";

/**
 * @author xgqfrms
 * @description leetcode problems: two-sum & https://leetcode.com/problems/two-sum/
 * @language JavaScript & ES6
 *
 * @param {Int Number Array} nums
 * @param {Int Number} target
 * @return {Int Number Array} result
 * @created 2018.02.28
 *
 */

const log = console.log;

// Time complexity : O(n**2)
// Space complexity: O(1)
const twoSumBruteForce = (nums = [2, 7, 11, 15], target = 9) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let temp_a = nums[i];
      let temp_b = nums[j];
      if (j !== i) {
        let temp_result = temp_a + temp_b;
        if (temp_result === target) {
          // 1. reset;
          // result = [];
          // result.push(i);
          // result.push(j);
          // 2. remove duplication
          if (!result.includes(i)) {
            result.push(i);
          }
          if (!result.includes(j)) {
            result.push(j);
          }
          result.sort();
        }
      } else {
        // break;
      }
    }
  }
  return result;
};


// Time complexity : O(n)
// Space complexity: O(n)

/**
 * @param {number[]} nums
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
    log(`\ntemp =`, temp);
    log(`nums[i] =`, nums[i]);
    log(`Object.keys(obj) =`, Object.keys(obj));
    // if(obj[nums[i]] !== undefined && Object.keys(obj).includes(nums[i].toString())) {
    if(obj[nums[i]] !== undefined) {
      result = [obj[nums[i]], i];
      log(`result =`, result);
      break;
    } else {
      obj[temp] = i;
    }
    log(`obj`, obj, i);
  }
  // log(`result`, result);
  return result;
};

// const test = twoSum([3, 3], 6);
const test = twoSum([2, 7, 11, 15], 9);

log(`test =`, test);
