"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-06-28
 * @modified
 *
 * @description binary-search-tree
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

class BinarySearchTree {
  constructor() {
    this.left = null;
    this.right = null;
    this.root = null;
    log(`init es6`)
    // this.searchNode = searchNode;
  }
  // public, 原型方法, 不可枚举
  search () {
    log(`search, prototype methods`)
  }
  // public, 实例方法, 可以枚举
  searchNode = function() {
    log(`searchNode`)
  }
}

// const bst = new BinarySearchTree();

export default BinarySearchTree;

export {
  BinarySearchTree,
};
