# question: https://neetcode.io/problems/two-integer-sum
# Input: 
# nums = [3,4,5,6], target = 7
# Output: [0,1]

from typing import List


class Solution:

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {}

        for i, n in enumerate(nums):
            diff = target - n

            if diff in prevMap:
                return [prevMap[diff],i]

            prevMap[n] = i

        

list = [3,4,5,6]
target = 7

a = Solution().twoSum(list, target)
print(a)