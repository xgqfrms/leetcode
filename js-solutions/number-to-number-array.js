"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-23
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
 */

const log = console.log;

const NumberToNumberArray = (num = 1) => {
  const result = [];
  const len = Math.ceil(Math.log10(num + 1));
  let temp = num;
  for (let i = len; i > 0; i--) {
    result.push(parseInt(temp / Math.pow(10, i - 1)));
    temp -= result[len - i] * Math.pow(10, i - 1);
  }
  return result;
}

// const test = NumberToNumberArray(123);
// const test = NumberToNumberArray(1234);
// const test = NumberToNumberArray(12345);
const test = NumberToNumberArray(1234567);

log(`test`, test)

