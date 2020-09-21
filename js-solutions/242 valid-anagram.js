"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-21
 * @modified
 *
 * @description 242 Valid Anagram / 同字母异序词
 * @difficulty Easy
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/valid-anagram/
 * @link https://leetcode-cn.com/problems/valid-anagram/
 * @solutions
 *
 */

const log = console.log;

// obj
function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = new Map();
  for (const item of str1) {
    if(!obj1.hasOwnProperty(item)) {
      obj1[item] = 1;
    } else {
      obj1[item] += 1;
      // obj1[item] = obj1[item] + 1;
    }
  }
  for (const item of str2) {
    if(!obj2.hasOwnProperty(item)) {
      obj2[item] = 1;
    } else {
      obj2[item] += 1;
    }
  }
  let result = true;
  const keys = Object.keys(obj1);
  for (const key of keys) {
    if(obj1[key] !== obj2[key]) {
      result = false;
    }
  }
  return result;
}

// const test = isAnagram(`anagra`, `anagram`);
const test1 = isAnagram(`gramana`, `anagram`);
const test2 = isAnagram(`rat`, `car`)

// log(`test`, test);
log(`test1`, test1);
log(`test2`, test2);

/*

// sort
function isAnagram(str1, str2) {
  return str1.sort() === str1.sort();
}

 */
/*

js array 相等比较 ?

arr1 = [1,2,3];
// (3) [1, 2, 3]

arr2 = [1,3, 2];
// (3) [1, 3, 2]

arr2.sort();
// (3) [1, 2, 3]

arr2.sort() === arr1;
false
arr2.sort() == arr1;
false

*/

/*
// map
function isAnagram(str1, str2) {
  const map1 = new Map();
  const map2 = new Map();
  for (const item of str1) {
    if(!map1.get(item)) {
      map1.set(item, 1);
    } else {
      map1.set(item, map1.get(item) + 1);
    }
  }
  for (const item of str2) {
    if(!map2.get(item)) {
      map2.set(item, 1);
    } else {
      map2.set(item, map2.get(item) + 1);
    }
  }
  // return map1 === map2;
}

 */
/*

js Map 相等比较 ?

m = new Map();
// Map(0) {}
m.set(`a`, 1);
// Map(1) {"a" => 1}
m.get(`a`);
// 1
m.set(`a`, m.get(`a`) + 1);
// Map(1) {"a" => 2}

m;
// Map(1) {"a" => 2}[[Entries]]0: {"a" => 2}key: "a"value: 2size: (...)__proto__: Map

m[0];
// undefined
m[`a`];
// undefined

map = new Map();
// Map(0) {}
map.get(`a`)
// undefined
map.set(`a`, 2);
// Map(1) {"a" => 2}

m == map;
false
m === map;
false

*/
