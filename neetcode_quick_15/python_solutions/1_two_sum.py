# question: https://neetcode.io/problems/two-integer-sum
# Input: 
# nums = [3,4,5,6], target = 7
# Output: [0,1]

from typing import List


class Solution:

    def two_sum(self, nums: List[int], target: int) -> List[int]:
        prev_map = {}

        for i, n in enumerate(nums):
            diff = target - n

            if diff in prev_map:
                return [prev_map[diff],i]

            prev_map[n] = i

        

list = [3,4,5,6]
target = 7

a = Solution().twoSum(list, target)
print(a)