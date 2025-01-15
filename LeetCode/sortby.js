/**
 * Sorts an array based on the result of a given function applied to its elements.
 *
 * @param {Array} arr - The input array to be sorted.
 * @param {Function} fn - A function that computes a value for each element to determine the sorting order.
 * @return {Array} - A new sorted array, without modifying the original array.
 */
var sortBy = function (arr, fn) {
  // Creates a shallow copy of the array using slice() to avoid modifying the original array.
  // Uses the sort() method to sort the array based on the computed values from fn.
  return arr.slice().sort((a, b) => fn(a) - fn(b));
};
