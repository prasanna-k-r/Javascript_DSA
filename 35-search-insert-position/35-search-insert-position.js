/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    return binarySearch(nums, target);
};

function binarySearch(nums, target) {
    let start=0;
    let end=nums.length - 1;
    
    while(start<=end) {
        const med = Math.floor((start + end) / 2);
        const el = nums[med];
        if (target === el) return med;
        if (target > el) start = med + 1;
        if (target < el) end = med - 1;
    }
    
    return end + 1;
}