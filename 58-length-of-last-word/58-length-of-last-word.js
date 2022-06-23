/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(' ');
    if(s === " ") {
        return 0;
    }
    return s[s.length-1].length;
};