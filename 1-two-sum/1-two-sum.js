/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Brute-Force Solution, Not Efficient, Time Complexity(n*n)
    // for(let i=0; i< nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[i]+ nums[j] == target)
    //             return [i,j];
    //     }
    // }
    let values = new Map();
    for(let i=0; i< nums.length; i++) {
        let complement = target - nums[i];
        if(values.has(complement)) {
            return [values.get(complement), i];
        }
        values.set(nums[i],i);
    }
    return [];
};


