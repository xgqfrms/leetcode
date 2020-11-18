"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-17
 * @modified
 *
 * @description 20. Valid Parentheses
 * @description 20. 有效的括号 ✅
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/valid-parentheses/
 * @link https://leetcode-cn.com/problems/valid-parentheses/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

// valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str = ``) {
  // 奇偶判断
  if (str.length % 2 === 1) {
    return false;
  }
  let result = false;
  // 字典
  const map = new Map([[")", "("], ["}", "{"], ["]", "["]]);
  const arr = str.split(``);
  // 栈，FILO，先进后出
  const queue = [];
  for (const key of arr) {
    // 入栈出栈 ？ 比配就消掉，不匹配就入栈
    if (!map.has(key)) {
      // 左括号，入栈
      queue.push(key)
    }
    if(map.has(key)) {
      let value = map.get(key);
      if(queue[queue.length - 1] === value) {
        // 右括号，
        // 第一个匹配的左括号，出栈
        queue.pop();
      } else {
        queue.push(key)
      }
    }
    log(`queue`, queue)
  }
  if (queue.length === 0) {
    result = true;
  }
  return result;
};

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// error
const test1 = isValid("({{{{}}}))");
const test2 = isValid("({)}");
const test3 = isValid("({{}))");
const test4 = isValid("([}}])");

// ok
const test5 = isValid("()[]{}");
const test6 = isValid("{[]}");

log(`❌test =`, test1 ? `✅` : `❌`);
log(`❌test =`, test2 ? `✅` : `❌`);
log(`❌test =`, test3 ? `✅` : `❌`);
log(`❌test =`, test4 ? `✅` : `❌`);
log(`\n✅test =`, test5 ? `✅` : `❌`);
log(`✅test =`, test6 ? `✅` : `❌`);

