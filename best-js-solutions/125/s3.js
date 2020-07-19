/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const regex = /[^0-9a-zA-Z]/g
  const r = s.replace(regex, '').toLowerCase()
  let i = 0, j = r.length - 1

  while (i < j) {
    if (r[i] !== r[j]) return false
    i++
    j--
  }
  return true
};
