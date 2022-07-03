/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let output = [];
    let first = 0;
    let second = n;
    
    for(let i = 0; i < nums.length; i+=2) {
        output[i] = nums[first];
        output[i+1] = nums[second];
        first++;
        second++;
    }
    
    return output;
};