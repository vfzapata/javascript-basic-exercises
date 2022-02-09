// find the vowels from a given string
const findVowels = str => {
  let vowelsFound = [];
  const vowels = ['a', 'e','i', 'o','u'];
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) vowelsFound.push(char);
  }
  return vowelsFound;
}

console.log('Array with vowels found: ',  findVowels('interview'))