#!/usr/bin/env node

const log = console.log;

log(`process.argv =`, process.argv[2]);

// String heterogeneous homogeneity judgment
const SHHJ = (str = ``) => {
  const [s1, s2] = str.trim().split(` `);
  let result = false;
  let a = s1.split(``).sort().join(``);
  let b = s2.split(``).sort().join(``);
  if(a === b) {
    result = true;
  }
  log(`result`, result);
  return result;
}
// node.js 命令行工具


const args = process.argv[2];
SHHJ(args);
