/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let start = 0;
    let end = nums.length - 1;
    let output = [];
    for(let i=0;i<nums.length;i++){
        let middle = Math.floor((start + end)/2);
        if(nums[i] === target) {
            output.push(i);
        } else if(nums[i] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return output;
};