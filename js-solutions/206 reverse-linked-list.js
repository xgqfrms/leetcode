"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-17
 * @modified
 *
 * @description 206 reverse-linked-list
 * @description 206 反转链表
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/reverse-linked-list/
 * @link https://leetcode-cn.com/problems/reverse-linked-list/
 * @solutions
 *
 */

const log = console.log;


var reverseList = function(head) {
  let [prev, curr] = [null, head];
  while (curr) {
    // swap
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};



/*

var reverseList = function(head) {
  // let prev = null;
  // let curr = head;
  let [prev, curr] = [null, head];
  while (curr) {
    // let temp = curr.next;
    // curr.next = prev;
    // prev = curr;
    // curr = temp;
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};

*/
