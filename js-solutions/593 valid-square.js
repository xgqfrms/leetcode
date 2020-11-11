"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description 593. Valid Square
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/valid-square/
 * @link https://leetcodee-cn.com/problems/valid-square/
 * @link https://leetcode.com/explore/challenge/card/november-leetcoding-challenge/565/week-2-november-8th-november-14th/3527/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  const args = arguments;
  // log(`args`, args);
  let result = false;
  // math
  const minValues = [];
  const maxValues = [];
  const absValues = [];
  for (let i = 0; i < args.length; i++) {
    const [
      min,
      max,
    ] = args[i];
    minValues.push(min);
    maxValues.push(max);
    absValues.push(Math.abs(max - min));
  }
  const min = minValues.sort((a, b) => a > b ? 1 : -1)[0];
  const max = maxValues.sort((a, b) => a > b ? -1 : 1)[0];
  const sum = absValues.reduce((acc, item) => acc += item, 0);
  // log(`min =`, min)
  // log(`max =`, max)
  // log(`abs =`, absValues)
  log(`sum / 2 === max - min`, sum / 2, (max - min));
  log(`sum === 2 * (max - min)`, sum , 2 * (max - min));
  if(sum === 2 * (max - min)) {
  // if((sum / 2) === (max - min)) {
    result = true;
  }
  return result;
};

// const p1 = [0, 0], p2 = [1, 1], p3 = [1, 0], p4 = [0, 1];
// const p1 = [0, 0], p2 = [50, 100], p3 = [100, 50], p4 = [100, 100];
// const p1 = [50, 50], p2 = [50, 100], p3 = [100, 50], p4 = [100, 100];
// const p1 = [25, 25], p2 = [75, 25], p3 = [25, 75], p4 = [75, 75];

const p1 = [6987,-473], p2 = [6985,-473], p3 = [6986,-472], p4 = [6986,-474];

const test = validSquare(p1, p2, p3, p4);

log(`test =`, test)

/*

// 5 / 1 ✅
min = 0
max = 1
abs = [ 0, 0, 1, 1 ]

// 100 / 50 ❌
min = 0
max = 100
abs = [ 0, 50, 50, 0 ]

// 50 / 50 ✅
min = 50
max = 100
abs = [ 0, 50, 50, 0 ]

// 50 / 50 ✅
min = 25
max = 75
abs = [ 0, 50, 50, 0 ]

*/

/*

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True

Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.

*/



