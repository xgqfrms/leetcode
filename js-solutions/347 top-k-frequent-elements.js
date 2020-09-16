"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-089-15
 * @modified
 *
 * @description 347. Top K Frequent Elements
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/top-k-frequent-elements/
 * @link https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//   const arr = nums.sort((a, b) => a - b > 0 ? 1 : -1);
//   log(`arr`, arr)
//   const result = [...new Set(arr)];
//   log(`result`, result)
//   return result.slice(0, k);
// };

/*

[4,1,-1,2,-1,2,3]
2
Output
[-1,1]
Expected
[-1,2]
*/

// arr [ -1, -1, 1, 2, 2, 3, 4 ]

// topKFrequent([4,1,-1,2,-1,2,3], 2);

var topKFrequent = function(nums, k) {
  const obj = {};
  // const result = [];
  for (let i = 0; i < nums.length; i++) {
    if(!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = 1;
      // result.push(nums[i]);
    } else {
      obj[nums[i]] += 1;
    }
  }
  // log(`obj`, obj);
  const arr = Object.entries(obj).sort((a, b) => a[1] - b[1] > 0 ? -1 : 1);
  // log(`arr`, arr);
  return arr.slice(0, k).map(item => parseInt(item[0]));
  // const keys = Object.keys(obj);
  // const values = Object.values(obj).sort((a, b) => a - b > 0 ? -1 : 1);
  // log(`values`, values);
  // log(`result`, result);
  // if(k > 1 && k < nums.length) {
  //   return [...new Set(result)].sort((a, b) => a - b > 0 ? -1 : 1).slice(0, k);
  // } else {
  //   return nums.sort((a, b) => a - b > 0 ? -1 : 1).slice(0, k);
  // }
  // return [...new Set(result)].sort((a, b) => a - b > 0 ? -1 : 1).slice(0, k);
}

/*

input
[1]
1
Output
[]
Expected
[1]

*/

/*

[1,2]
2
Output
[]
Expected
[1,2]

*/


/*

[5,3,1,1,1,3,73,1]
1
Output
[3]
Expected
[1]

*/

const test1 = topKFrequent([1], 1);
const test2 = topKFrequent([1, 2], 2);
const test = topKFrequent([5,3,1,1,1,3,73,1], 1);

log(`test1 =`, test1);
log(`test1 =`, test2);
log(`test =`, test);
