"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-17
 * @modified
 *
 * @description node.js cli & process.argv
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

const args = process.argv[2];

log(`args`, args);

// 接受参数 ??? process.argv

function test(args) {
  log(`args`, args)
}

module.exports = test;
