/*
Problem Prompt:
Write a function that takes in two strings and returns true if they are valid anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Function Signature:
function areAnagrams(str1, str2) {
    // Your code here
}

Test Cases:
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Expected output: true
console.log(areAnagrams("restful", "fluster")); // Expected output: true
console.log(areAnagrams("programming", "coding")); // Expected output: false
*/

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();
  if (str1.length !== str2.length) return false;
  let charAt = {};
  for (let i = 0; i < str1.length; i++) {
    charAt[str1[i]] = (charAt[str1[i]] || 0) + 1;
  }

  for (let s of str2) {
    if (!charAt[s]) return false;
    charAt[s]--;
  }
  return true;
}

module.exports = areAnagrams;
