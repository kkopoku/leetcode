class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

      function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
      }

      let r = 0
      let l = s.length-1

      while(r<l){

        while(r<l && !isAlphanumeric(s[r])) r++
        while(r<l && !isAlphanumeric(s[l])) l--

        if(s[r].toLocaleLowerCase() !== s[l].toLocaleLowerCase()) return false
        r++
        l--

      }

      return true

    }
}
