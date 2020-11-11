"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-11
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/interview/1/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;


/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let result = [];
  let nums = [];
  let strs = [];
  // let map = new Map();
  let obj = {};
  for(let item of logs) {
    const arr = item.split(` `);
    if(!/[A-Za-z]/g.test(arr[1])) {
      // num
      nums.push(item);
    } else {
      // str
      // strs.push(item);
      const uniqueKey = arr.slice(1).join(` `).replace(/[0-9]/g, ``);
      // const uniqueKey = arr.join(` `).replace(/[0-9]/g, ``);
      // remove number
      log(`✅ uniqueKey `, uniqueKey)
      // log(`arr.slice(1).join(' ') `, uniqueKey)
      // map.set(uniqueKey, item);
      if(!obj[uniqueKey]) {
        obj[uniqueKey] = item;
      } else {
        log(`uniqueKey + Date.now()`, uniqueKey + `` + Date.now())
        obj[uniqueKey + `` + Date.now()] = item;
      }
      // if(!map.has(arr[1])) {
      //   map.set(arr[1], item);
      // } else {
      //   map.set(arr[1] + 1, item);
      // }
    }
  }
  // strs.sort();
  for(let key of Object.keys(obj).sort()) {
    log(`key`, key, obj[key])
    strs.push(obj[key]);
  }
  // for(let item of map.sort()) {
  //   log(`item`, item)
  //   strs.push(item[1]);
  // }
  result = strs.concat(nums);
  return result;
};


// const input = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
const input = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"];

// const output = ["let1 art can", "let3 art zero", "let2 own kit dig", "dig1 8 1 5 1", "dig2 3 6"];

const test = reorderLogFiles(input);

log(`test =`, test)

/*

Wrong Answer

Input
["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]
Output
["a8 act zoo", "ab1 off key dog", "g1 act car", "a1 9 2 3 1", "zo4 4 7"]
Expected
["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]

*/

/*

Input

["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"]

Output
["a2 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1","zo4 4 7"]

Expected
["a2 act car", "g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]

*/


/*

Input
["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output
["let1 art can","let2 own kit dig","let3 art zero","dig1 8 1 5 1","dig2 3 6"]
Expected
["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

*/


/*

Input
["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"]
Output
["g1 act car", "a2 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]
Expected
["a2 act car", "g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]

*/


/*

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]


Constraints:

0 <= logs.length <= 100
3 <= logs[i].length <= 100
logs[i] is guaranteed to have an identifier, and a word after the identifier.

*/
