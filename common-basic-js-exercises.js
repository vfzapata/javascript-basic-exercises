// Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello'));

// Is palindrome
function checkPalindrome(str) {
  const reversed = reverseString(str);
  return reversed === str;
}
console.log(checkPalindrome('solos'));

// Find largest number
function largestNumber(arr) {
  return Math.max(...arr);
}
console.log(largestNumber([12,100,20,40,5]));

// Find lowest number
function lowestNumber(arr) {
  return Math.min(...arr);
}
console.log(lowestNumber([100,2,60,1,900]));

// Removes duplicates from an array
function removesDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removesDuplicates([1,2,1,6,8,6]));

// Flat arrays
function flattenArray(arr) {
  return arr.flat(Infinity);
  // indicates how much should be flattened
  // By default (1), infinity means all levels
}
console.log(flattenArray([1, [2, [3, [4]]]]));

// Array iteration
const orderBySequence = (arr) => {
  const counter = {};
  for(num of arr) {
    counter[num] = (counter[num] || 0) +1;
  }
  return arr.sort((a,b) => counter[b] - counter[a])
}

console.log(orderBySequence([1,2,2,3,4,4,4,5,6]));
