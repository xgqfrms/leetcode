"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description 367. Valid Perfect Square
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/valid-perfect-square/
 * @link https://leetcodee-cn.com/problems/valid-perfect-square/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num === 1 || num === 0) {
    return true;
  }
  let result = false;
  const len = Math.floor(num / 2);
  log(`len =`, len)
  for(let i = 0; i <= len; i++) {
    if(i * i === num) {
      result = true;
    }
  }
  return result;
};


const test = isPerfectSquare(1);
const test1 = isPerfectSquare(4);
const test2 = isPerfectSquare(16);

log(`test =`, test)
log(`test1 =`, test1)
log(`test2 =`, test2)



/*

var isPerfectSquare = function(num) {
  if(num === 1 || num === 2 || num === 4) {
    return true;
  }
  let result = false;
  const len = Math.floor(num / 2);
  for(let i = 0; i < len; i++) {
    if(i * i === num) {
    // if(i ** 2 === num) {
      result = true;
    }
  }
  return result;
};


*/

