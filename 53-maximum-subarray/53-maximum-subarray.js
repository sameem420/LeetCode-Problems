/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
//     var prev = 0;
//   var max = nums[0];

//   for (var i = 0; i < nums.length; i++) {
//     prev = Math.max(prev + nums[i], nums[i]);
//     max = Math.max(max, prev);
//   }
//   return max;
    for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};