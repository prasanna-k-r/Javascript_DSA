/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let numMap = new Map();
    let result = [];
    for(let num of nums1) {
        numMap.set(num, numMap.get(num) + 1 || 1);
    }
    
    for(let num of nums2) {
        if(numMap.has(num) && numMap.get(num) > 0) {
            result.push(num);
            numMap.set(num, numMap.get(num) - 1);
        }
    }
    
    console.log(numMap);
    return result;
};