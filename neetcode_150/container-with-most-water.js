class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

      let l = 0
      let r = heights.length-1
      let max = 0

      while(l<r){
        let minh = Math.min(heights[l], heights[r])
        let water = minh*(r-l)
        max = Math.max(max,water)

        if(heights[l] > heights[r]){
          r--
        }else l++
      }

      return max

    }
}


// Input: height = [1,7,2,5,4,7,3,6]
// 
// Output: 36
// Example 2:
// 
// Input: height = [2,2,2]
// 
// Output: 4