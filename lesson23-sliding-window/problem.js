// Given a string s and an integer k, write a function that finds the length of the longest substring that contains at most k distinct characters.
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring "ece" has length 3 and contains 2 distinct characters.

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The string "aa" has length 2 and contains 1 distinct character.

// Input: s = "abcdef", k = 3
// Output: 3
// Explanation: Any substring of length 3 contains exactly 3 distinct characters.

module.exports = function longestSubstringKDistinct(str, k) {
  let charAt = {};
  let maxSum = 0;
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    if (!charAt[str[right]]) {
      charAt[str[right]] = 1;
    } else {
      charAt[str[right]]++;
    }

    if (Object.keys(charAt).length > k) {
      charAt[str[left]] -= 1;
      if (charAt[str[left]] === 0) {
        delete charAt[str[left]];
      }
      left++;
    }
    maxSum = Math.max(maxSum, right - left + 1);
  }
  return maxSum;
};
