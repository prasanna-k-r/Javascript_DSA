/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Convert Array to Integer
    let number = BigInt(digits.join(""))+1n;
    
    // Convert Integer to Array
    return number.toString().split("").map(Number);
};