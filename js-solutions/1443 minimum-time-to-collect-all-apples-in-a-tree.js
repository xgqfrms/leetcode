"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-11-18
 * @modified
 *
 * @description 1443. Minimum Time to Collect All Apples in a Tree
 * @description 1443. 收集树上所有苹果的最少时间 / 收集树中所有苹果的最短时间
 * @difficulty Medium
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * @link https://leetcode-cn.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;



/*

Input:
n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
Output: 8

Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.


Input:
n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
Output: 6

Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.

*/


/*


Constraints:

1 <= n <= 10^5
edges.length == n - 1
edges[i].length == 2
0 <= ai < bi <= n - 1
from i < to i
hasApple.length == n

*/

/*

// error
const test1 = isValid(`((}}`);
// ok
const test2 = isValid(`()[]{}`);

log(`❌test =`, test1 ? `✅` : `❌`);
log(`✅test ok =`, test2 ? `✅` : `❌`);

*/
