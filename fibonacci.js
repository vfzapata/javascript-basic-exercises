const fibonacci = (limit) => {
  let sequence = 1;
  let start = 0;
  for (let i = 1; i <= limit; i++) {
    let fibonacciSum = start + sequence;
    start = sequence;
    sequence = fibonacciSum;
    console.log(fibonacciSum);
  }
}

console.log(fibonacci(5));
