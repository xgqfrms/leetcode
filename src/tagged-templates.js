"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-09-21
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

// tagged templates

const name = `xgqfrms`;
const age = 23;
const title = "CEO";

const taggedTemplateFunc = (strs, arg1, arg2, ...args) => {
 log(`\nstrs`, strs);
 log(`arg1`, arg1);
 log(`arg2`, arg2);
 log(`args`, args);
 return strs[0] + arg1 + strs[1] + arg2;
}

taggedTemplateFunc`name=${name}, age=${age}, title=${title}`;

const q = `what's your name`;

taggedTemplateFunc`${q}, name=${name}, age=${age}, title=${title}`;


/*

$ node tagged-templates.js

strs [ 'name=', ', age=', ', title=', '' ]
arg1 xgqfrms
arg2 23
args [ 'CEO' ]

strs [ '', ', name=', ', age=', ', title=', '' ]
arg1 what's your name
arg2 xgqfrms
args [ 23, 'CEO' ]

*/
