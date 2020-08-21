"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-20
 * @modified
 *
 * @description
 * @description 大数相乘 算法
 * @difficulty Medium
 * @complexity O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/multiply-strings/
 * @solutions
 *
 */

const log = console.log;

// multiply-strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 == "0" || num1 == "0") {
    return "0";
  }
  const arr1  = Array.from(num1).map(i => parseInt(i));
  const arr2  = Array.from(num2).map(i => parseInt(i));
  //  const len = arr1.length > arr2.length ? arr1.length : arr2.length;
  function multi(arr, num) {
    let result = 0;
    let len = arr.length;
    while(len) {
     result += num * arr[arr.length - len] * 10**(len - 1);
     len --;
    }
    // console.log(`result`, result)
    return result;
  }
  const result = [];
  let len = arr1.length;
  while(len) {
    result.push(multi(arr2, arr1[arr1.length - len] * 10**(len - 1)));
    len--;
  }
  // console.log(`result`, result)
  // return result.reduce((sum, i) => sum += i, 0).toString();
  sum = 0;
  l = result.length
  while(l) {
    sum += result[l - 1]
    l--;
  }
  return sum;
};

// 测试 jest https://jestjs.io/
const test = multiply("2", "3");
log(`test`, test)
// "6"

const test1 = multiply("123", "456");
log(`test1`, test1)
// "56088"

const test2 = multiply("123456789", "987654321");
log(`test2`, test2)
// "121932631112635269"

// "121932631112635280" ???

/*

result = [
  98765432100000000,
  19753086420000000,
  2962962963000000,
  395061728400000,
  49382716050000,
  5925925926000,
  691358024700,
  79012345680,
  8888888889
]

result.reduce((sum, i) => sum += i, 0).toString();
"121932631112635280"

sum = 0;

l = result.length

while(l) {
  sum += result[l - 1]
  l--;
}
sum
// 121932631112635260

123456789 * 987654321
// 121932631112635260

result.reduce((sum, i) => sum += i, 0).toString();
// "121932631112635280"


 */

/*

// ❓❌ not bigInt bug

79012345680 + 8888888889
// 87901234569

98765432100000000 + 79012345680 + 8888888889
// 98765520001234580

https://leetcode.com/problems/multiply-strings/discuss/802582/bug

https://leetcode-cn.com/problems/multiply-strings/submissions/

*/
