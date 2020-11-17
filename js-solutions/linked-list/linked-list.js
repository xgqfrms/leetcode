"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-17
 * @modified
 *
 * @description 链表
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

// 节点
function ListNode(val, next) {
  this.val = 0 || val;
  this.next = null || next;
}

// 链表
function LinkedList(value) {
  const node = new ListNode(value, ``);
  if(!head) {
    head = node;
  } else {
    let current = head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
};
