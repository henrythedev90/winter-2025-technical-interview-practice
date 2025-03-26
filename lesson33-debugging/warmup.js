// Try to debug the code and fix the errors. Run the program in your terminal with node warmup.js. If there are no errors, you have successfully debugged the code.

function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers(); // should print 1 - 5 in order a second apart

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumbers([10, 5, 3, -1, 0])); // should print [-1, 0, 3, 5, 10]
