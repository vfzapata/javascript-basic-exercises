 const fizzBuzz = (n) => {
  for(let i = 1; 0 <= n; i++) {
    if(i % 15 === 0) console.log("FizzBuzz");
    else if(i % 3 === 0) console.log("Fizz");
    else if(i % 5 === 0) console.log("Buzz");
    else console.log('Element ', i)
  }
 }
 
 fizzBuzz(2);
