"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 121. Best Time to Buy and Sell Stock
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @solutions
 *
 */

const log = console.log;


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let min = Math.min(prices[0], prices[1]);
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      min = Math.min(min, prices[i - 1]);
      if(prices[i] - min > max) {
        max = prices[i] - min;
      }
    } else {
      min = Math.min(min, prices[i]);
    }
  }
  return max;
};

const test = maxProfit([7,1,5,3,6,4]);
const test1 = maxProfit([1,2]);
const test2 = maxProfit([1,2,4]);
const test3 = maxProfit([2,1,4]);

log(`\nmax`, test);
log(`max`, test1);
log(`max`, test2);
log(`max`, test3);
