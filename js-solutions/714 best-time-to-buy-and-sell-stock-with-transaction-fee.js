"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 714. Best Time to Buy and Sell Stock with Transaction Fee
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * @solutions
 *
 */

const log = console.log;

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  // let max = 0;
  // let count = 0;
  // if(prices.length > 1) {
  //   count = 1;
  // }
  // for (let i = 1; i < prices.length; i++) {
  //   if (prices[i] > prices[i - 1]) {
  //     max += prices[i] - prices[i - 1];
  //     count += 1;
  //   } else {
  //     max -= prices[i] - prices[i - 1];
  //     count -= 1;
  //   }
  // }
  // // return max;
  // return max - count * fee;
};

const test = maxProfit([1, 3, 2, 8, 4, 9], 2);

log(`max`, test);

/*

Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

Example 1:
Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8

Explanation:
The maximum profit can be achieved by:
Buying at prices[0] = 1
Selling at prices[3] = 8
Buying at prices[4] = 4
Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

Note:

0 < prices.length <= 50000.
0 < prices[i] < 50000.
0 <= fee < 50000.


*/
