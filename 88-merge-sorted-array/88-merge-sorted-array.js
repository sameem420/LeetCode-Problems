/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Solution # 1
  nums1.splice(m, nums1.length - m);
    
    var i = 0;
    var j = 0;
    
    while (j < nums2.length) {
        if (nums1[i] === undefined || nums1[i] > nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
            i++;
        } else {
            i++;
        }
    }
    
    // Solution # 2
    //   let idx1 = m - 1, idx2 = n - 1, idx3 = m + n - 1;
  // while (idx2 >= 0) {
  //   nums1[idx3--] = nums1[idx1] > nums2[idx2]
  //     ? nums1[idx1--]
  //     : nums2[idx2--];
  // }
    // m--;n--;
    // let index = nums1.length - 1;
    // while(index >= 0) {
    //     if(m < 0) {
    //         nums1[index] = nums2[n--];
    //     }
    //     else if(n < 0) {
    //         nums1[index] = nums1[m--];
    //     }
    //     else {
    //         if(nums1[m] > nums2[n]) {
    //             nums1[index] = nums1[m--]
    //         }
    //         else {
    //             nums1[index] = nums2[n--]
    //         }
    //     }
    //     index--;
    // }
};