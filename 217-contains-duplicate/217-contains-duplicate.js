/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numObj = {};
    for(let val of nums) {
        numObj[val] = (numObj[val] || 0) + 1;
        if(numObj[val] > 1) {
            return true;
        }
    }
    
    return false;
};