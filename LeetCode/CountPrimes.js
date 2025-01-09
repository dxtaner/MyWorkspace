//**
 * @param {number} n - Upper limit of the range (counts prime numbers between 0 and n-1)
 * @return {number} - Total count of prime numbers
 */
var countPrimes = function(n) {
    // Initially, all numbers are marked as 'prime'
    const isPrime = new Array(n).fill(true);

    // 0 and 1 are not prime numbers
    isPrime[0] = isPrime[1] = false;

    // Check all numbers from 2 up to the square root of n
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) { // If i is prime
            // Mark all multiples of i as not prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Counter to keep track of the number of prime numbers
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) { // If the number is prime
            count++;
        }
    }

    // Return the total count of prime numbers
    return count;
};
