"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-017
 * @modified
 *
 * @description 206 reverse-linked-list
 * @description 206 反转链表
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/reverse-linked-list/
 * @solutions
 *
 */

const log = console.log;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  while (head) {
    // swap
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
};

/*

[1,2,3,4,5]

执行步骤

p = null

h = 1
t = 2(h.n)
h.n = null(p)
// 1.n => null
p = 1(h)
h = 2t)

h = 2
t = 3(h.n)
h.n = 1(p)
// 2.n => 1
p = 2(h)
h = 3(t)


*/

/*
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
  }
  return prev;
};

*/
