"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-19
 * @modified
 *
 * @description 1290. Convert Binary Number in a Linked List to Integer
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link
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
 * @return {number}
 */
var getDecimalValue = function(head) {
  const result = [];
  while(head) {
    result.push(head.val)
    head = head.next;
  }
  return parseInt(result.join(``), 2);
};


/*

var getDecimalValue = function(head) {
  let val = 0;
  while (head) {
    val = (val << 1) | head.val;
    head = head.next;
  }
  return val;
};


*/
