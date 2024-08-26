class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    trap(heights) {

      let track = []
      let maxhleft = 0
      let maxhright = 0
      let water = 0

      for (let i=0; i<heights.length; i++){
        if(i === 0) {
          track[0] = [0]
          maxhleft = Math.max(heights[i],maxhleft)
        }else{
          track[i] = [maxhleft]
          maxhleft = Math.max(heights[i],maxhleft)
        }
      }

      for(let i=heights.length-1; i>0; i--){
        if(i === heights.length-1){
          track[i].push(0)
          maxhright = Math.max(heights[i],maxhright)
        }else{
          track[i].push(maxhright)
          maxhright = Math.max(heights[i],maxhright)
        }
      }

      for (let i=0; i<heights.length; i++){
        let maxl = track[i][0]
        let maxr = track[i][1]
        let waterPerIdx = Math.min(maxl,maxr) - heights[i]
        if(waterPerIdx > 0){
          water += waterPerIdx
        }
      }

      return water
     
    }
}

// Input: height = [0,2,0,3,1,0,1,3,2,1]

// Output: 9
