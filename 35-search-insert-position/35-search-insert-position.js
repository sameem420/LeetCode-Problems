/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     var i = 0;
    while(target > nums[i]) {
        i++;
    }
    return i;
    // for(let i=0; i<nums.length; i++) {
    //     if(target > nums[i] && target <= nums[i+1]) {
    //         return i+1
    //     }
    //     if(target > nums[nums.length-1]) {
    //         return nums.length;
    //     }
    //     if(target < nums[i]) return 0;
    //     if(target === 0 || nums.length === 1 || target === nums[i]) return 0;
    // }
};