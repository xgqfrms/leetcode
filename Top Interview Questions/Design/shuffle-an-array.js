"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-0
 * @modified
 *
 * @description Shuffle an Array
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/
 * @solutions
 *
 */

const log = console.log;


/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums || [];
  // this.backup = nums || [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  // return this.backup;
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  function shuffle (arr = []) {
    let len = arr.length;
    while(len) {
      const randomIndex = Math.floor(Math.random() * len--);
      // swap
      [
        arr[len],
        arr[randomIndex],
      ] = [
        arr[randomIndex],
        arr[len],
      ];
    }
    log(`shuffle arr`, arr)
    return arr;
  }
  const arr = [...this.nums];
  return shuffle(arr);
  // return shuffle(this.nums);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
const nums = [1, 2, 3];
// const nums  = [1, 2, 3, 4, 5, 6, 7];
var obj = new Solution(nums);
var param_1 = obj.reset();
var param_2 = obj.shuffle();

log(`obj =\n`, obj)
log(`param_1 =\n`, param_1)
log(`param_2 =\n`, param_2)
