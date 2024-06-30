class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        
        let sA = s.split("").sort()
        let sT = t.split("").sort()

        for (let i = 0; i<t.length; ++i){
            let truth = (sA[i] == sT[i]) ? true : false
            if (!truth) return false
        }
        return true
    }
}
