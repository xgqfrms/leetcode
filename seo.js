"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
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
 */

// const log = console.log;

const SEO_FALG = () => {
  const log = console.log;
  let finished = false;
  let counter = 1;
  function auto() {
    const img = document.querySelector(`[data-flagcounter="img" ]`);
    const a = document.querySelector(`[data-flagcounter="a" ]`);
    if(a && img && !finished) {
      log(`❓flagcounter.com trying ${counter} times`);
      a.href = `https://s11.flagcounter.com/count2/QIXi`;
      img.src = `https://s11.flagcounter.com/count2/QIXi/bg_000000/txt_00FF00/border_FF00FF/columns_3/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_1/`;
    } else {
      finished = true;
      log(` 🎉 flagcounter.com finished!`);
    }
    counter += 1;
  }
  let timer = setInterval(() => {
    if(!finished) {
      auto();
    } else {
      log(` ✅ clearInterval, after ${counter} times`);
      clearInterval(timer);
    }
  }, 1000);
}
