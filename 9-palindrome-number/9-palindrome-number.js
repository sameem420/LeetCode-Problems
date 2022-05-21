/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  //   if (x < 0) return false
  // let rev = 0
  // for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
  // return rev === x
    
    let result = 0; xCopy = x;
    while(x > 0) {
        rem = x % 10;
        x = ~~(x/10);
        result = result * 10 + rem;
    }
    return result == xCopy;
};