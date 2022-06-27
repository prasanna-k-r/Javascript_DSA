/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let size = nums.length
    for(let j=0; j<size; j++) {
        if(nums[j] === 0) {
            nums.splice(j,1);
            nums.push(0);
            j--;
            size--;
        }
    }
    return nums;
};