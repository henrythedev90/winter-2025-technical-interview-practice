const topKFrequent = require("/Users/paulgasbarra/Code/pursuit/dsa-coursework-l3-2025/lesson10-hash-tables/problem");

// Test case 1: nums contains positive and negative numbers
let nums = [1, -2, 2, 3, -3, 3, 3];
let k = 2;
console.log(topKFrequent(nums, k)); // Output: [3, -3]

// Test case 2: nums contains duplicate elements
nums = [1, 2, 2, 3, 3, 3];
k = 3;
console.log(topKFrequent(nums, k)); // Output: [3, 2, 1]

// Test case 3: nums contains only one element
nums = [7];
k = 1;
console.log(topKFrequent(nums, k)); // Output: [7]

// Test case 4: nums contains all the same elements
nums = [5, 5, 5, 5, 5];
k = 1;
console.log(topKFrequent(nums, k)); // Output: [5]

// Test case 5: nums contains both positive and negative numbers with the same frequency
nums = [-1, -1, 1, 1, 2, 2];
k = 2;
console.log(topKFrequent(nums, k)); // Output: [1, -1]
