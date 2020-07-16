"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-06-28
 * @modified
 *
 * @description binary-search-tree es5
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

function BinarySearchTree() {
  this.left = null;
  this.right = null;
  this.root = null;
  log(`init es5`)
  // public, 实例方法, 可以枚举
  this.search = function () {
    log(`search`)
  }
  // private
  var searchNode = function () {
    log(`search`)
  }
  function searchKey () {
    log(`search`)
  }
}

var bst = new BinarySearchTree();

