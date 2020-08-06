"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-01
 * @modified
 *
 * @description 快速排序 quicksort
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://github.com/xgqfrms/leetcode/issues/7#issuecomment-669991209
 * @solutions
 *
 */

const log = console.log;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // 中间index
  var pivotIndex = Math.floor(arr.length / 2);
  // 中间值，参考值
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickSort(left).concat([pivot], quickSort(right));
};

const arr = [12, 7, 5, 23, 18, 37, 1, 9, 17];

const test = quickSort(arr);

log(`arr =\n`, arr)
log(`test =\n`, test)

/*

arr =
 [
  12, 7, 5, 23,
  37, 1, 9, 17
]
test =
 [
   1,  5,  7,  9, 12,
  17, 18, 23, 37
]

*/
