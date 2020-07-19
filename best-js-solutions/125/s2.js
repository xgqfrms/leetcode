
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const regex = '[^\w]';
  const newString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let i = 0, j = newString.length - 1;
  while(i < j) {
    if(newString[i] != newString[j]) {
      return false;
    }
    i++;
    j--
  }
  return true;
};
