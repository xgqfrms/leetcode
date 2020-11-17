"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-16
 * @modified
 *
 * @description linked-list-cycle
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/linked-list-cycle/
 * @link https://leetcode-cn.com/problems/linked-list-cycle/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   let result = false;
//   try {
//     JSON.stringify(head);
//     // result = false;
//   } catch(err) {
//     result = true;
//   }
//   return result;
// };


// 快慢指针，双指针
var hasCycle = function(head) {
  let result = false;
  // 初始化
  let slow = head;
  let fast = head;
  // 判断是否到头
  // while(fast !== null && fast.next !== null) {
  // while(slow !== null && fast !== null && fast.next !== null) {
  while(slow && fast && fast.next) {
    // 一步
    slow = slow.next;
    // 两步
    fast = fast.next.next;
    // if(slow.val === fast.val)
    // shit question 💩❌, linked-list Node not exist value ???
    if(slow === fast) {
      result = true;
      break;
    }
  }
  return result;
};

// // 快慢指针
// var hasCycle = function(head) {
//   let result = false;
//   // 初始化
//   let slow = head;
//   let fast = head;
//   // 判断是否到头
//   while(fast && fast.next !== null && fast.next.next !== null) {
//     // 一步
//     slow = slow.next;
//     // 两步
//     fast = fast.next.next;
//     if(slow.val === fast.val) {
//       result = true;
//     }
//   }
//   return result;
// };



/*

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function List(node) {
  // this.val = val;
  // this.next = null;
}

*/
