"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;


function Node (value) {
  this.value = value || ``;
  this.next = null;
}

function LinkedList () {
  // init & 闭包 closure
  let length = 0;
  let head = null;
  // methods
  this.append = function(value) {
    const node = new Node(value, ``);
    // log(`this.head`, this.head)
    // log(`head`, head)
    // this.head undefined
    // head null
    if(!head) {
      head = node;
    } else {
      let current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    log(`head`, head)
    length += 1;
  }
  this.insert = function(position, value) {
    //
    length += 1;
  }
  this.removeAt = function(position) {
    if(position >= 0 && position < length) {
      let current = head;
      if (position === 0) {
        head = current.next;
      } else {
        let previous;
        let index = 1;
        while(index <= position) {
          previous = current;
          current = current.next;
          index ++;
        }
        previous.next = current.next;
      }
      length -= 1;
      log(`head`, head)
      return current.value;
    } else {
      log(`❌下标越界错误`)
      return null;
    }
  }
  this.remove = function(value) {
    //
  }
  this.removeAll = function() {
    //
  }
  this.indexOf = function(value) {
    // -1
  }
  this.isEmpty = function() {
    return this.length === 0;
  }
  this.size = function() {
    return this.length;
  }
  this.getHead = function() {
    // return this.length;
  }
  this.toString = function() {
    // return this.length;
  }
  this.print = function () {
    //
  }
}

const test = new LinkedList();

test.append(1);
test.append(2);
test.append(3);
// log(`test`, test)
setTimeout(() => {
  test.removeAt(1);
}, 1000);
