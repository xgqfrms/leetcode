"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-19
 * @modified
 *
 * @description 2. Add Two Numbers
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

/*

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next) {
  this.val = 0 || val;
  this.next = null || next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  log(`l1`, l1)
  log(`l2`, l1)
  const arr1 = [];
  const arr2 = [];
  // let head1 = l1;
  // let head2 = l2;
  while(l1) {
      arr1.push(l1.val);
      l1 = l1.next;
  }
  while(l2) {
      arr2.push(l2.val)
      l2 = l2.next;
  }
  log(`arr1`, arr1)
  log(`arr2`, arr2)
  const sum = parseInt(arr1.reverse().join(``)) + parseInt(arr2.reverse().join(``));
  log(`sum`, sum)
  const arr = Array.from(sum + ``).reverse().map(i => parseInt(i));
  // [7, 0, 8]
  log(`arr`, arr)
  const LinkedList = (value) => {
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
  let head = null;
  for (let i = 0; i < arr.length; i++) {
    LinkedList(arr[i]);
  }
  log(`head`, head)
  return head;
};

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

test.append(2);
test.append(4);
test.append(3);

const l1 = test.getList();

const test2 = new LinkedList();

test2.append(5);
test2.append(6);
test2.append(4);

const l2 = test2.getList();

addTwoNumbers(l1, l2);
