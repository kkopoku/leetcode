class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let numsMap = new Map()
        let result = []
        
        for(let i=0; i<nums.length; ++i){
            let current = nums[i]
            let diff = target-current
            if(numsMap.has(diff)){
                result.push(i)
                result.push(numsMap.get(diff))
            }
            else
                numsMap.set(current,i)
        }

        return result.sort()

    }
}
