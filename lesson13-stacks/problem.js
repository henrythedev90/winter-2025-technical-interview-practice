/**
 * Given a string containing just the characters '(', ')'.
 *
 * We will say this string is considered valid if:
 * 1. Open brackets must be closed by close brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * For example, "()" and "()(())" are valid but "())" and "()(()" are not.
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isValid;
