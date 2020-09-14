"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-14
 * @modified
 *
 * @description 155. Min Stack
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/min-stack/
 * @solutions
 *
 */

const log = console.log;

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x){
  this.arr.push(x);
  // return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function(){
   this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function(){
  const len = this.arr.length;
  log(`this.arr`, this.arr);
  return this.arr[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function(){
  const temp = [...this.arr];
  return temp.sort((a, b) => a - b > 0 ? 1 : -1)[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();

log(minStack.push(-2));
log(minStack.push(0));
log(minStack.push(-3));
log(minStack.getMin());
// return -3
log(minStack.pop());
log(minStack.top());
// return 0
log(minStack.getMin());
// return -2

// SyntaxError: Identifier 'MinStack' has already been declared

/*


class MinStack {
  constructor() {
    this.arr = [];
  }
  push(x){
    this.arr.push(x);
    // return null;
  }
  pop(){
    this.arr.pop();
  }
  top(){
    const len = this.arr.length;
    log(`this.arr`, this.arr);
    return this.arr[len - 1];
  }
  getMin(){
    const temp = [...this.arr];
    return temp.sort((a, b) => a - b > 0 ? 1 : -1)[0];
  }
  // getMin = function(){
  //   const temp = [...this.arr];
  //   return temp.sort((a, b) => a - b > 0 ? 1 : -1)[0];
  // };
}


*/
