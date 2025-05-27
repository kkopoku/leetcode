class Solution:
    def character_replacement(self, s:str, k:int) -> int :
        max_length = 0
        l = 0
        mine = {}
        
        for i, item in enumerate(s):
           
            mine[item] = mine.get(item, 0) + 1
            
            max_occurring = max(mine.values())
            cur_len = (i - l + 1)
            
            while (cur_len - max_occurring) > k:
                mine[s[l]] -= 1
                l += 1
            
            
            max_length = max( cur_len, max_length )
           
        return max_length
           
           
           

print(Solution().character_replacement("AAABABB", 1))
        
