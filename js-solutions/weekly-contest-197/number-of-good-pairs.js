"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-17
 * @modified
 *
 * @description 1512. Number of Good Pairs
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

Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

var numIdenticalPairs = function(nums) {
  let result = 0;
  let len = nums.length;
  if(len < 2) {
    return result;
  } else {
    for (let i = 0; i < nums.length; i++) {
      const temp1 = nums[i];
      const arr =  nums.slice(i + 1);
      for (let j = 0; j < arr.length; j++) {
        const temp2 = arr[j];
        if(temp1 == temp2) {
          result++;
        }
      }
    }
    return result;
  }
};

const test = [1,2,3,1,1,3];
const result = numIdenticalPairs(test);
log(`test`, result)
// 4

const test2 = [1,1,1,1];
const result2 = numIdenticalPairs(test2);
log(`test2`, result2)

const test3 = [1,2,3];
const result3 = numIdenticalPairs(test3);
log(`test3`, result3)

/*

nums = [1,2,3,1,1,3]
4
// (0,3), (0,4), (3,4), (2,5)

nums = [1,1,1,1]
6
// Each pair in the array are good.

nums = [1,2,3]
0

*/
