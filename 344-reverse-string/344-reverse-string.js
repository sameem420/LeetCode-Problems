/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse()
    let start = 0, end = s.length - 1;
    while (start <= end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};