/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Brute-Force Solution, Not Efficient, Time Complexity = O(n*n)
    // for(let i=0; i< nums.length; i++) {
    //     for(let j=i+1; j<nums.length; j++) {
    //         if(nums[i]+ nums[j] == target)
    //             return [i,j];
    //     }
    // }
    // 2nd Solution, Time Complexity = O(n)
    // let values = new Map();
    // for(let i=0; i< nums.length; i++) {
    //     let complement = target - nums[i];
    //     if(values.has(complement)) {
    //         return [values.get(complement), i];
    //     }
    //     values.set(nums[i],i);
    // }
    // return [];
    // 2nd Solution, Time Complexity = O(n)
    let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
};


