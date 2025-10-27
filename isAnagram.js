// Two words are anagrams if they have the same letters in a different order.
const isAnagram = (a,b) => {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(a) === normalize(b);
}
isAnagram('listen', 'silent');
