/**
 * Question Description: given a strings, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: S = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 * Input: S = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 ≤ s.length <= 1000
 * s consist of only digits and English letters.
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let wordArray = s.split("");
  let result = [];
  let wordLength = wordArray.length;
  let longest = 0;

  for (let i = 0; i < wordLength; ++i) {

    for(let j=0; j<i; ++j) {

    }

    let currentArray = wordArray.slice(0, i + 1)

    //this determines if the currentArray is a palindrome
    let currentLength = currentArray.length
    if (currentLength >= longest) {
      let current = currentArray.join("");
      let currentReversed = currentArray.reverse().join("")

      if (current == currentReversed) {
        longest = currentLength
        result.push(current);
      }
    }

  }
  console.log(result);
  console.log(result[result.length - 1]);
};

let s = "babaaaabd";
longestPalindrome(s);



//not completed
//To do: complete it