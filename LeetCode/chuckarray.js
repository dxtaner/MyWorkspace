/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  // Check if the array is empty or size is not a positive number
  if (arr.length === 0 || size <= 0) {
    return [];
  }

  // Calculate the number of chunks
  const numChunks = Math.ceil(arr.length / size);

  // Create an array to store the chunks
  const chunks = [];

  // Iterate over the array and create subarrays of the specified size
  for (let i = 0; i < numChunks; i++) {
    const start = i * size;
    const end = start + size;
    chunks.push(arr.slice(start, end));
  }

  return chunks;
};

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;
console.log(chunk(arr, size)); // Output: [[1, 2, 3], [4, 5, 6], [7]]
