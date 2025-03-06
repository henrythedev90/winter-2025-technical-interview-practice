// Write a function that takes in a positive integer n and returns the sum of all consecutive numbers from 1 to n. Think carefully about time complexity for this problem. How would you do it in linear time? Is there a way to do it in constant time? Try to come up with both solutions. Start with the most straightforward solution and then try to optimize it. You may want to do some research. ;)

/**
 * Calculates the sum of consecutive numbers from 1 to n.
 * @param {number} n - The positive integer.
 * @returns {number} The sum of consecutive numbers from 1 to n.
 */

function sumConsecutiveNumbers(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n++;
  }
  return sum;
}

// function sumConsecutiveNumbers(n) {
//   return (n * (n + 1)) / 2;
// }

module.exports = sumConsecutiveNumbers;
