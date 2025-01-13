/**
 * Calculates the n-th Fibonacci number using recursion.
 * 
 * @param {number} n - The position of the Fibonacci number to calculate (0-indexed).
 * @return {number} - The n-th Fibonacci number.
 */
var fib = function (n) {
  // Base case: If n is 0, return 0 (first Fibonacci number is 0)
  if (n === 0) {
    return 0;
  } 
  // Base case: If n is 1, return 1 (second Fibonacci number is 1)
  else if (n === 1) {
    return 1;
  } 
  // Recursive case: Return the sum of the two preceding Fibonacci numbers
  else {
    return fib(n - 1) + fib(n - 2);
  }
};
