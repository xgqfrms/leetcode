"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
 * @modified
 *
 * @description 1122. Relative Sort Array
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions https://leetcode.com/submissions/detail/383551624/
 *
 */

const log = console.log;

/*

Input:
arr1 = [2,3,1,3,2,4,6,7,9,2,19]
arr2 = [2,1,4,3,9,6]

Output:
[2,2,2,1,4,3,3,9,6,7,19]

*/

/*

Constraints:

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
Each arr2[i] is distinct.
Each arr2[i] is in arr1.

*/


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;
  const result = [...arr2];
  if(len1 < 1 || len2 < 1) {
    return arr1;
  }
  const insert = (arr, key) => {
    const index = arr.indexOf(key);
    if(index) {
      const left = arr.slice(0, index + 1)
      const right = arr.slice(0, index + 1)
      return [...left, key, ...right];
    } else {
      return arr.push(key)
    }
  }
  arr1 = arr1.sort((a, b) => a > b ? 1 : -1);
  // log(`arr1`, arr1)
  log(`result`, result);
  while(len1) {
    let key = arr1[arr1.length - len1];
    // log(`\nkey`, key)
    let index = result.indexOf(key)
    // let index = result.lastIndexOf(key)
    // log(`index`, index)
    if(index > -1) {
      result.splice(index, 0, key);
    } else {
      result.push(key)
    }
    // insert(result, key);
    // log(`result`, result);
    len1--;
  }
  // log(`result`, result);
  while(len2) {
    let key = arr2[arr2.length - len2];
    let index = result.indexOf(key)
    log(`\nkey`, key)
    log(`index`, index)
    result.splice(index, 1);
    len2 --;
  }
  log(`result`, result);
  return result;
};


const arr1 = [2,3,1,3,2,4,6,7,9,2,19]
const arr2 = [2,1,4,3,9,6]

relativeSortArray(arr1, arr2)

