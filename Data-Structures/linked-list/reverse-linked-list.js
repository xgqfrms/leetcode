"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-06-25
 * @modified
 *
 * @description reverse-linked-list 链表反转
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

// reverse list

function reverseLinkedList(self, head) {
  cur, prev = head, null;
  while (cur) {
    cur.next, prev, cur = prev, cur, cur.next;
  }
  return prev;
}
