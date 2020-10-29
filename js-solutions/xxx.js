"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-0
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;


var singleNumber = function(nums) {
  // 差集
  const obj = {};
  for(let i of nums) {
    if(!obj.hasOwnProperty(i)) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  const result = Object.entries(obj).filter(arr => arr[1] === 1);
  // const result = Object.entries(obj).filter(arr => {
  //   if(arr[1] === 1) {
  //     // return parseInt(arr[0]);
  //   }
  // });
  return parseInt(result[0]);
};


const arr = [2,2,1];

const test = singleNumber(arr);
log(`test =`, test)
