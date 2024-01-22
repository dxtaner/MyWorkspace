/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1); // Initialize each child with one candy

  // Scan from left to right to make sure higher-rated child gets more candies than the left neighbor
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Scan from right to left to make sure higher-rated child gets more candies than the right neighbor
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Sum up the total number of candies
  return candies.reduce((total, num) => total + num, 0);
};

// Example usage:
const ratings = [1, 0, 2];
console.log(candy(ratings)); // Output: 5
