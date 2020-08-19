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
  this.val = 0 || val;
  this.next = null || next;
}
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let current = head;
  let previous = ``;
  // let previous = null;
  // let next;
  while(current) {
    log(`current =`, current)
    log(`current.next =`, current.next)
    // current = ListNode { val: 1, next: ListNode { val: 2, next: '' } }
    // current.next = ListNode { val: 2, next: '' }
    current.next = previous;
    // swap
    previous = current;
    current = current.next;
  }
  log(`previous`, previous)
  // head = previous;
  // log(`head`, head)
  // return head;
};

// const arr = [...new Uint8Array(5)].map((item, i) => new ListNode(i + 1, i < 4 ? i + 2 : null))

/*

Input: 1->2->NULL
Output: 2->1->NULL

Input: 1->2->3->NULL
Output: 3->2->1->NULL

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

*/

function LinkedList () {
  // init & 闭包 closure
  let length = 0;
  let head = null;
  // methods
  this.append = function(value) {
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
    // log(`head =\n`, head)
    length += 1;
  }
  this.getList = function() {
    // log(`head =`, head)
    return head;
  }
}

const test = new LinkedList();

test.append(1);
test.append(2);
// test.append(3);

reverseList(test.getList())

/*

head = ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: '' } } }
*/
