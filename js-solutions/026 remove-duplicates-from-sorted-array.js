"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 26. Remove Duplicates from Sorted Array
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @solutions
 *
 */

const log = console.log;

/*

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   nums = nums.reduce((acc, item) => {
//     if(!acc.includes(item)) {
//       acc.push(item);
//     }
//     // log(`acc`, acc);
//     return acc;
//   }, []);
//   log(`nums`, nums, nums.length)
//   return nums.length;
// };

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let len = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[len]) {
      len++;
      nums[len] = nums[i];
    }
  }
  log(`nums`, nums);
  return len + 1;
};

let nums = [1,1,2];
log(`origin nums`, nums , nums .length)

const test = removeDuplicates(nums);
log(`test =`, test);

log(`\nnums`, nums , nums .length)
for (let i = 0; i < nums.length; i++) {
  log(`nums[i]`, nums[i])
}


/*

const arr = [1,1,2];

const test = removeDuplicates(arr);
log(`test =`, test);

log(`arr`, arr, arr.length)
for (let i = 0; i < arr.length; i++) {
  log(`arr[i]`, arr[i])
}

*/
