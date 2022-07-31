/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // const sign = x < 0 ? -1 : 1;
    // x = Math.abs(x);
    // let rem = '', reversed = '';
    // while(x>0) {
    //     rem = x % 10;
    //     x = ~~(x / 10);
    //     reversed += rem;
    // }
    // return (+reversed)*sign;
    sign = Math.sign(x);
    x = Math.abs(x);
    x = x.toString();
    let reversed = '';
    for(let char of x) {
      reversed = char + reversed;
    }
    if(reversed > Math.pow(2,31)) return 0;
    return reversed * sign;
};