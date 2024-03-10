/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let sum = 0;

  while (n > 0) {
    sum += n % k;
    n = Math.floor(n / k);
  }

  return sum;
};
