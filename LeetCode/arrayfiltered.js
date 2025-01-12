
/**
 * Filters an array based on a given condition function.
 * 
 * @param {number[]} arr - The array to filter.
 * @param {Function} fn - A function that determines whether an element should be included in the result.
 *                          It takes two arguments:
 *                          - arr[i]: The current element in the array.
 *                          - i: The index of the current element.
 * @return {number[]} - A new array containing elements that satisfy the condition defined by `fn`.
 */
var filter = function (arr, fn) {
  // Initialize an empty array to store the filtered elements
  var filteredArray = [];

  // Loop through each element in the array
  for (var i = 0; i < arr.length; i++) {
    // Check if the current element satisfies the condition defined by `fn`
    if (fn(arr[i], i)) {
      // If it does, add the element to the filtered array
      filteredArray.push(arr[i]);
    }
  }

  // Return the filtered array
  return filteredArray;
};
