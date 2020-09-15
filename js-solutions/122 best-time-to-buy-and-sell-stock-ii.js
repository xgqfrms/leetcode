"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-15
 * @modified
 *
 * @description 122. Best Time to Buy and Sell Stock II
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
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
  let temp = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[temp]) {
      max += prices[i] - prices[temp];
    }
    temp++;
  }
  return max;
};

const test = maxProfit([7,1,5,3,6,4]);

log(`max`, test);



/*

Input: [7,1,5,3,6,4]
Output: 7
Explanation:
Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


Input: [1,2,3,4,5]
Output: 4
Explanation:
Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
engaging multiple transactions at the same time. You must sell before buying


Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.




Constraints:

1 <= prices.length <= 3 * 10 ^ 4
0 <= prices[i] <= 10 ^ 4

*/


