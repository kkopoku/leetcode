/**
 *
 *  Given an array of integers nums, return the length of the longest consecutive sequence of elements.
 *  A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.
 *  You must write an algorithm that runs in O(n) time.
 *
 *   Example 1:
 *   Input: nums = [2,20,4,10,3,4,5]
 *
 *   Output: 4
 *   Explanation: The longest consecutive sequence is [2, 3, 4, 5].
 *
 *   Example 2:
 *   Input: nums = [0,3,2,5,4,6,1,1]
 *
 *   Output: 7
 *   Constraints:
 *
 *   0 <= nums.length <= 1000
 *   -10^9 <= nums[i] <= 10^9
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {

    if(nums.length === 0) return 0

    let mySet = new Set(nums)
    let longest = 0

    for(let num of nums){
        let previous = num-1
        if( !mySet.has(previous) ){

            // let start = num
            let len = 1
            while(mySet.has(num+1)){
                len += 1
                num++
            }
            
            longest = Math.max(len,longest)
        }
    }

    return longest

}

let test = [2,20,4,10,3,4,5]

longestConsecutive(test)
