"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 188. Best Time to Buy and Sell Stock IV
 * @difficulty Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  //
};


const test = maxProfit(2, [3,2,6,5,0,3]);

log(`max`, test);


/*

Say you have an array for which the i-th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

Example 1:

Input: [2,4,1], k = 2
Output: 2
Explanation:
Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:

Input: [3,2,6,5,0,3], k = 2
Output: 7

Explanation:
Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

*/
