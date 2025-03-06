function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let newStr = words.join(" ");
  return newStr;
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));

// // Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello"));
// // Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
