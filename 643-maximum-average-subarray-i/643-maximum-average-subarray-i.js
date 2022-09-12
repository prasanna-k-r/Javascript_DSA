/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // use sliding window concept
    // find max avg for first 4 element;
    // remove the first index and add the next index.
    
    if(nums.lenght == 0) {
        return 0;
    }
    
    let max = 0;
    for(let i=0; i<k; i++) {
        max = max + nums[i];
    }
    let maxAvg = max / k;
    for(let i=0; i<(nums.length - k); i++) {
        max = max - nums[i] + nums[i+k];
        let tempAvg = max/k;
        if(maxAvg < tempAvg) {
            maxAvg = tempAvg;
        }
    }
    return maxAvg;
};