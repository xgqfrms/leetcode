"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 309. Best Time to Buy and Sell Stock with Cooldown
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @solutions
 *
 */

const log = console.log;


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  //
};

const test = maxProfit([1, 3, 2, 8, 4, 9]);

log(`max`, test);


/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

*/
