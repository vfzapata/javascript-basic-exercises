// Printing even numbers

// Solution1
const printEvenNumbers = limit => {
  for(let i = 0; i <= limit; i++) {
    if(i%2 === 0) console.log('Even number', i);
  }
};

printEvenNumbers(10);

// Solution 2
const printEvenNumbers2 = limit => {
  for(let i = 0; i <= limit; i+=2) {
    console.log('Even number solution 2', i);
  }
};

printEvenNumbers2(20);

// Printing odd numbers

const printOddNumbers = limit => {
  for(let i = 0; i <= limit; i++) {
    if(i%2 !== 0) console.log('Odd Number', i);
  }
};

printOddNumbers(10);
