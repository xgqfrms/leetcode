"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-25
 * @modified
 *
 * @description 56. Merge Intervals
 * @description 56. 合并区间
 * @difficulty Medium
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/merge-intervals/
 * @link https://leetcode-cn.com/problems/merge-intervals/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const result = [];
  if(intervals.length < 2) {
    return intervals || [];
  }
  // sort
  // intervals.sort(([a0], [b0]) => a0 > b0 ? 1 : -1);
  intervals.sort(([a0, a1], [b0, b1]) => {
    if(a0 !== b0) {
      return a0 > b0 ? 1 : -1;
    } else {
      // sort second
      return a1 > b1 ? 1 : -1;
    }
  });
  const map = new Map();
  let temp = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    // [[1,3],[2,6],[8,10],[15,18]]
    const [t0, t1] = temp;
    const [a0, a1] = intervals[i];
    // log(`t0, t1 =`, t0, t1)
    // log(`a0, a1 =`, a0, a1)
    if(a0 <= t1 && a1 > t1) {
      // merge
      result.push([t0, a1]);
      map.set(JSON.stringify([t0, a1]))
      temp = [t0, a1];
    } else if (a0 > t1) {
      // 重复 bug
      if(!map.has(JSON.stringify([t0, t1]))) {
        result.push([t0, t1]);
        map.set(JSON.stringify([t0, t1]))
      }
      result.push([a0, a1]);
      map.set(JSON.stringify([a0, a1]))
      temp = [a0, a1];
    } else {
      if(a0 <= t1 && a0 >= t0 && a1 >= t1) {
        // merge
        result.push([t0, a1]);
        map.set(JSON.stringify([t0, a1]))
        temp = [t0, a1];
      } else {
        result.push([a0, a1]);
        map.set(JSON.stringify([a0, a1]))
        temp = [a0, a1];
      }
    }
  }
  return result;
};


const intervals = [[1, 3], [2, 6], [8, 10], [ 15, 18]];
const test = merge(intervals);
log(`test =`, test);
// [[1, 6], [8, 10], [15, 18]]
log(`test =`, JSON.stringify(test) === JSON.stringify([[1, 6], [8, 10], [15, 18]]) ? `✅` : `❌`);

const intervals2 = [[1, 4], [4, 5]];
const test2 = merge(intervals2);
log(`test2 =`, test2);
// [[1, 5]]
log(`test =`, JSON.stringify(test2) === JSON.stringify([[1,5]]) ? `✅` : `❌`);


const intervals3 = [[1, 4], [5, 6]];
const test3 = merge(intervals3);
log(`test3 =`, test3);
// [[1,4],[5,6]]
log(`test =`, JSON.stringify(test3) === JSON.stringify([[1,4],[5,6]]) ? `✅` : `❌`);


const intervals4= [[1, 4], [0, 1]];
const test4 = merge(intervals4);
log(`test4 =`, test4);
// [[0,4]]
log(`test =`, JSON.stringify(test4) === JSON.stringify( [[0,4]]) ? `✅` : `❌`);


const intervals5= [[1, 4], [1, 5]];
const test5 = merge(intervals5);
log(`test5 =`, test5);
// [[1,5]]
log(`test =`, JSON.stringify(test5) === JSON.stringify([[1,5]]) ? `✅` : `❌`);


const intervals6 = [[1,4], [0,4]];
const test6 = merge(intervals6);
log(`test6 =`, test6);
// [[0,4]]
log(`test =`, JSON.stringify(test6) === JSON.stringify([[0,4]]) ? `✅` : `❌`);



const intervals7 = [[1,4],[2,3]];
const test7 = merge(intervals7);
log(`test7 =`, test7);
// [[1,4]]
log(`test =`, JSON.stringify(test7) === JSON.stringify([[1,4]]) ? `✅` : `❌`);
