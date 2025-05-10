from typing import List


class Solution:
    def three_sum(self, nums: List[int]) -> List[List[int]]:
        
        nums.sort()
        result = []

        for index, value in enumerate(nums):
            
            if value > 0:
                break
            
            if index > 0 and value == nums[index - 1]:
                continue
            
            left = index+1
            right = len(nums) - 1
            
            while left<right:   
                total = value + nums[right] + nums[left]
                if total == 0:
                    res = [value, nums[right], nums[left]]
                    res.sort()
                    result.append(res)
                    left += 1
                elif total > 0:
                    right -= 1
                else:     
                    left += 1               
                    
        print(result)
        return result
    
    


sample = [-1,0,1,2,-1,-4]

s = Solution()
s.three_sum(sample)

