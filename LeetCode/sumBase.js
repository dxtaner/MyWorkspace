/**
 * @param {number} n - A number (integer) to convert.
 * @param {number} k - The target base for conversion.
 * @return {number} - The sum of the digits of the number in the target base.
 */
var sumBase = function (n, k) {
  let sum = 0; // Variable to store the sum of the digits.

  // Continue looping as long as n is greater than 0.
  while (n > 0) {
    // Add the remainder (last digit in base k) to the sum.
    sum += n % k;

    // Update n by dividing it by the base and taking the integer part.
    n = Math.floor(n / k);
  }

  // Return the calculated sum.
  return sum;
};

