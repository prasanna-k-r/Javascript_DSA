/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false
    } else if(n == 1) {
        return true;
    } else if(n%2 == 1) {
        return false;
    }
    return isPowerOfTwo(n/2);
};