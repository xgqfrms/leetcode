"use strict";

/**
 * @author xgqfrms
 * @description leetcode problems: longest-substring-without-repeating-characters & https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @language JavaScript & ES6
 *
 * @param {string} str
 * @return {number}
 * @created 2019.04.04
 *
 */


 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;
  for( i = 0 ; i < sLen; i++ ){
    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);
    if(posIndex > -1){
      maxStr = maxStr.substring(posIndex + 1);
    }
    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }
  return maxLen;
};
