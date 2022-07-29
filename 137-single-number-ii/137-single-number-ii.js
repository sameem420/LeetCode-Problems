/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     const arr = [];
//   for (let i=0;i<nums.length; i++) {
//     if (arr.includes(nums[i])) {
//       arr.slice(i)
//     } else {
//       arr.push(nums[i])
//     }
//   }
//     console.log(arr)
// return arr
    const hash = {};
for (i in nums) {
    if (!hash[nums[i]]){
        hash[nums[i]] = 1;
    } else if (hash[nums[i]] && hash[nums[i]] > 1) {
        delete hash[nums[i]];
    } else {
        hash[nums[i]]++
    }
}
return Object.keys(hash)[0]
};