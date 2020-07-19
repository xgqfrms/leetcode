
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) return true;

    let sanitize = s.toLowerCase().split('')
            .filter(char => /[A-Z]|[a-z]|[0-9]/g.test(char))

    let start = 0;
    let end = sanitize.length-1;
    while(start < end) {
        if (sanitize[start] !== sanitize[end]) return false;
        start++;
        end--;
    }

    return true;
};
