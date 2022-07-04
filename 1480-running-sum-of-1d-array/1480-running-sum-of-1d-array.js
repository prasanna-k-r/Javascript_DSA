/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    for(let i=0; i<nums.length; i++) {
        let output=nums[i];
        for(let j=0; j<i; j++) {
            output = output + nums[j];
        }
        result.push(output);
    }
    
    return result;
};