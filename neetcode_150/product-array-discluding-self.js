/**
 * Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
 *
 * Each product is guaranteed to fit in a 32-bit integer.
 *
 * Follow-up: Could you solve it in
 * 𝑂(𝑛)
 * O(n) time without using the division operation?
 *
 * Example 1:
 *
 * Input: nums = [1,2,4,6]
 *
 * Output: [48,24,12,8]
 * Example 2:
 *
 * Input: nums = [-1,0,1,2,3]
 *
 * Output: [0,-6,0,0,0]
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {

    //first iteration from 0 to length-1

    let product = 1
    let length = nums.length
    let result = []

    //prefix calculation
    for (let i=0; i<nums.length; i++){
        result[i] = product
        product *= nums[i]

    }

    // postfix calculation
    product = 1
    for (let i = length-1; i>-1; i--){
        result[i] *= product
        product *= nums[i]
    }

    return result

}

let test = [-1,0,1,2,3]
productExceptSelf(test)
