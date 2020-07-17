"use strict";

/**
 * @author xgqfrms
 * @description leetcode problems: two-sum & https://leetcode.com/problems/two-sum/
 * @language JavaScript & ES6
 *
 * @param {Int Number Array} nums
 * @param {Int Number} target
 * @return {Int Number Array} result
 * @created 2018.02.28
 *
 */

const twoSum = (nums = [2, 7, 11, 15], target = 9) => {
    let result = [];
    for(let i =  0; i < nums.length; i++){
        for(let j =  0; j < nums.length; j++){
            let temp_a = nums[i];
            let temp_b = nums[j];
            if(j !== i){
                let temp_result = temp_a + temp_b;
                if(temp_result === target){
                    // 1. reset;
                    // result = [];
                    // result.push(i);
                    // result.push(j);
                    // 2. remove duplication
                    if(!result.includes(i)){
                       result.push(i);
                    }
                    if(!result.includes(j)){
                       result.push(j);
                    }
                    result.sort();
                }
            }else{
                // break;
            }
        }
    }
    return result;
};
