// https://www.nowcoder.com/discuss/276

// https://www.nowcoder.com/question/next?pid=21256789&qid=827779&tid=34861601

var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line){
  const log = console.log;
  //log(`line =`,line);
  var tokens = line.split(' ');
  // log(`tokens[0]`, tokens[0]);
  // log(`tokens[1]`, tokens[1]);
  const SHHJ = (str = ``) => {
    const [s1, s2] = str.trim().split(` `);
    let result = false;
    let a = s1.split(``).sort().join(``);
    let b = s2.split(``).sort().join(``);
    if(a === b) {
      result = true;
    }
    log(result);
    // 只可以 log 一次，什么垃圾逻辑呀！💩
    return result;
  }
  const args = line;
  //log(`args =`,args);
  const result = SHHJ(args);
  // log(`result `, result);
});

/*
你的输出为:

tokens[0] abc
tokens[1] aBc

你的输出为:

line = abc aBc
tokens[0] abc
tokens[1] aBc


你的输出为:

result false
*/

// String heterogeneous homogeneity judgment
// node.js 命令行工具
