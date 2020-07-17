#!/usr/bin/env node

const log = console.log;

console.log(`arguments =`, arguments);
console.log(`process.argv =`, process.argv[2]);


/*

$ node cli abc;
// hello world abc
$ node cli.js abc
// hello world abc

*/
