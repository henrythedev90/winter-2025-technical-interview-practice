/**
 * Problem: Implement a function that determines if a given year is a leap year. A leap year is a year that is divisible by 4, but not divisible by 100, unless it is divisible by 400. For example, 2000 is a leap year, but 1900 is not.
 * This should ideally run in O(1) time.
 */

function isLeapYear(year) {
  // TODO: Implement the function
}

module.exports = isLeapYear;

function isUniform(a, b) {
  let count = 0;
  for (let range = 1; range <= 9; range++) {
    let num = range;
    while (num <= b) {
      if (num >= a) {
        count++;
      }
      num = num * 10 + range;
    }
  }
  return count;
}
