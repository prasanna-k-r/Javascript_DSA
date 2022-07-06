/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let output = 0;
    for(let ops of operations) {
        ops.includes('--') ? output-- : output ++;
    }
    return output;
};