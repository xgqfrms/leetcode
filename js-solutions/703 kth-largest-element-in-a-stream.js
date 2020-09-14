"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-14
 * @modified
 *
 * @description 703. Kth Largest Element in a Stream
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.nums = nums;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.nums.push(val);
  // this.nums = this.nums.push(val);
  // log(`this.nums`, this.nums);
  const arr = this.nums.sort((a, b) => a - b > 0 ? -1 : 1);
  // log(`arr`, arr);
  // const result = [...new Set(arr)];
  // log(`result`, result)
  // log(`result[this.k - 1]`, result[this.k - 1]);
  // return result[this.k - 1];
  log(`arr[this.k - 1]`, arr[this.k - 1]);
  return arr[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


const kthLargest = new KthLargest(3, [4,5,8,2]);
kthLargest.add(3);
// returns 4
kthLargest.add(5);
// returns 5
kthLargest.add(10);
// returns 5
kthLargest.add(9);
// returns 8
kthLargest.add(4);
// returns 8


class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums;
  };
  add(val) {
    this.nums.push(val);
    const arr = this.nums.sort((a, b) => a - b > 0 ? -1 : 1);
    return arr[k - 1];
    // return [...new Set(arr)][k - 1];
  }
}
