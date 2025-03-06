/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let charAt = new Set();
  let maxSum = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (charAt.has(s[right])) {
      charAt.delete(s[left]);
      left++;
    }
    charAt.add(s[right]);
    maxSum = Math.max(maxSum, right - left + 1);
  }
  return maxSum;
}

module.exports = lengthOfLongestSubstring;
