"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-18
 * @modified
 *
 * @description 949. Largest Time for Given Digits
 * @description 949. 给定数字的最大时间
 * @difficulty Medium
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/largest-time-for-given-digits/
 * @link https://leetcode-cn.com/problems/largest-time-for-given-digits/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
  // 'arr' must consist of values from 0 to 9 only
  let result = ``;
  arr.sort();
  // HH:MM
  // The earliest 24-hour time is 00:00, and the latest is 23:59.
  if(
    (arr[0] > 2)
    || (arr[0] === 2 && arr[1] > 3)
    || (arr[0] === 2 && arr[1] === 3 && arr[2] > 5)
    // || (arr[0] === 2 && arr[1] === 3 && arr[2] === 5 && arr[1] > 9)
  ) {
    result = ``;
  } else {
    //
  }
  return result;
};


/*

arr.length == 4
0 <= arr[i] <= 9

*/



/*

// error
const test1 = isValid(`((}}`);
// ok
const test2 = isValid(`()[]{}`);

log(`❌test =`, test1 ? `✅` : `❌`);
log(`✅test ok =`, test2 ? `✅` : `❌`);

*/
