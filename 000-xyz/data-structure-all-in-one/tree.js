"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-22
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
 * @best_solutions
 *
 */

const log = console.log;


class BinarySearchTree {
  constructor(value) {
    this.root = null;
    this.root = this.node(value);
  }
  node(value) {
    return {
      value,
      left: null,
      right: null,
    };
  }
  addNode(value, direction = `left`) {
   if(direction === `left`) {
     let temp = this.root.left;
     while(temp) {
      temp = temp.left;
     }
     temp = this.node(value);
   }
    log(`this.root`, this.root)
  }
  deleteNode(value) {
    //
  }
}

const test = new BinarySearchTree(8);

log(`test`, test)
test.addNode(3)
log(`\ntest`, test)

