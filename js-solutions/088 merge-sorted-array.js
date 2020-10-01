"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 88. Merge Sorted Array
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/merge-sorted-array/
 * @link https://leetcode-cn.com/problems/merge-sorted-array/
 * @solutions
 *
 */

const log = console.log;

var merge = function(nums1, m, nums2, n) {
  // Do not return anything, modify nums1 in-place instead.
  // return nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a, b) => a -b > 0 ? 1 : -1);
  // nums1.slice(0, m).concat(nums2.slice(0, n));
  if(m < 1) {
    nums1[m] = nums2[0];
  } else {
    for(let i = 0; i < n; i++) {
      let temp = nums2[i];
      if(temp > nums1[m - 1]) {
        nums1[m + i] = temp;
      } else {
        let big = nums1[m - 1];
        console.log(`big`, big);
        nums1[m - 1] = temp;
        nums1[m + i] = big;
      }
      console.log(`nums1`, nums1);
    }
    console.log(`nums1`, nums1);
  }
};


let nums1 = [1,2,3,0,0,0], m = 3;
let nums2 = [2,5,6],       n = 3;

merge(nums1, m, nums2, n);



/*

3
[1,2,3]
3
Output
[4,5,1,2,3,6]
Expected
[1,2,3,4,5,6]


*/
