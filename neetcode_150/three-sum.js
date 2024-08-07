/**
 *
 *Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
 *
 *The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
 *
 *Example 1:
 *
 *Input: nums = [-1,0,1,2,-1,-4]
 *
 *Output: [[-1,-1,2],[-1,0,1]]
 *Explanation:
 *nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 *nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 *nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 *The distinct triplets are [-1,0,1] and [-1,-1,2].
 *
 *Example 2:
 *
 *Input: nums = [0,1,1]
 *
 *Output: []
 *Explanation: The only possible triplet does not sum up to 0.
 *
 *Example 3:
 *
 *Input: nums = [0,0,0]
 *
 *Output: [[0,0,0]]
 *Explanation: The only possible triplet sums up to 0.
 *
 *Constraints:
 *
 *3 <= nums.length <= 1000
 *-10^5 <= nums[i] <= 10^5
 **/

function threeSum(nums) {
  let sorted = nums.sort((a,b) => a-b);
  let res = [];

  for (let i = 0; i < sorted.length; i++) {
    if (nums[i] > 0) break                        //<============== This is optimization
    if (i > 0 && sorted[i] == sorted[i - 1]) {
      continue
    }

    let l = i + 1
    let r = sorted.length - 1

    while (l < r) {
      let sum = sorted[i] + sorted[l] + sorted[r]
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        res.push([sorted[i], sorted[l], sorted[r]])
        l++
        r--
        while (sorted[l] === sorted[l - 1] && l < r) {   //<============== This is optimization
          l++
        }
      }
    }
  }

  return res;
}

let input = [-1, 0, 1, 2, -1, -4];
let input1 = [0, 0, 0, 0];
let nums = [3, 0, -2, -1, 1, 2];
let nums1 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];

let ik = threeSum(input);

console.log(ik);

//NB: YOU SHOULD SOLVE THIS AGAIN
//TODO: TRY USING A SET TO SOLVE THIS
