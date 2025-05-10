#question: https://neetcode.io/problems/products-of-array-discluding-self
# Input: nums = [1,2,4,6]
# Output: [48,24,12,8]

from typing import List

class Solution:
    def product_except_self(self, nums: List[int]) -> List[int]:
        
        length = len(nums)
        res = [1]*length
        
        # prefix loop ------>
        prefix = 1 #current prod of prefix
        for i in range(length):
            res[i] = prefix #set the prefix
            prefix *= nums[i]

        postfix = 1
        for i in range(length -1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]

        return res