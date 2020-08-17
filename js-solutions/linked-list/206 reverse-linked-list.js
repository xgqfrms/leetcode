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

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

};

arr = [...new Uint8Array(5)].map((item, i) => new ListNode(i + 1, i < 4 ? i + 2 : null))

/*

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

*/
