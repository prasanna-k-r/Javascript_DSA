/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    for(let num of nums) {
        obj[num] = (obj[num] || 0) + 1;
        if(obj[num] > 1) {
            return true;
        }
    }
    return false;
};