from abc import ABC, abstractmethod
from typing import List
import math

class Vehicle(ABC):
    @abstractmethod
    def move(self):
        pass

class Car(Vehicle):
    def __init__(self, speed:int, wheels:str):
        self.speed = speed
        self.wheels = wheels
        
        
    def move(self):
        print("Vroooom")
        

    def get_speed(self):
        print(f"The speed of this cars is {self.speed} MPH")
        
        
    def get_wheels(self):
        print(f"The is a {self.speed}-wheel drive car")
        
        

class Benz(Car):
    def __init__(self, type):
        self.type = type
        super().__init__(1000, "SuperCharged Turbo")
        
    def move(self):
        print("Benz makes Papapappaaaaa")
        
    def get_type(self):
        print(f"Type is {self.type}")
        
        
        

# hilux = Car(50, "all")
# hilux.get_speed()
# hilux.get_wheels()


# benz = Benz("C300")
# benz.get_speed()
# benz.get_wheels()
# benz.get_type()
# benz.move()


# Design a class structure for a zoo that has animals with different behaviors like walking, flying, and swimming.

# my_list = [0]*5
# l = list(range(4,6))


# lm = [i+1 for i in range(6)]
# print(lm)


# Input: [-1, 0, 1, 2, -1, -4]
# Output: [[-1, -1, 2], [-1, 0, 1]]
# three_sum(nums: List[int]) -> List[List[int]]

def three_sum(nums: List[int]) -> List[List[int]]:
    
    # sort nums
    res = []
    nums.sort()
    
    for i, a in enumerate(nums):
        if i > 0 and a == nums[i-1]:
            continue
        
        l, r = i+1 , len(nums)-1
        
        while l<r:
            total = a + nums[l] + nums[r]
            if total > 0:
                r -= 1
            elif total < 0:
                l += 1
            else:
                res.append([a,nums[l],nums[r]])
                l += 1
                while nums[l] == nums[l-1] and l < r :
                    l += 1
        
    print(res)
    return res
    
    
    
three_sum([-1, 0, 1, 2, -1, -4])


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i, a in enumerate(nums):
            if a > 0:
                break

            if i > 0 and a == nums[i - 1]:
                continue

            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while nums[l] == nums[l - 1] and l < r:
                        l += 1
           
        print(res)
        return res
    
    
    
# Solution().threeSum([-1, 0, 1, 2, -1, -4])