/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // Result array to store permutations
  var result = [];

  // Helper function to generate permutations recursively
  var backtrack = function (currentPermutation) {
    // Base case: If the current permutation is of the same length as nums, add it to the result
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]); // Make a copy to avoid reference issues
      return;
    }

    // Iterate through each number in nums
    for (var num of nums) {
      // If the number is not already in the current permutation, add it and recurse
      if (!currentPermutation.includes(num)) {
        currentPermutation.push(num);
        backtrack(currentPermutation);
        currentPermutation.pop(); // Backtrack by removing the last added element
      }
    }
  };

  // Start the recursion with an empty permutation
  backtrack([]);

  return result;
};

// Example usage:
var nums = [1, 2, 3];
var result = permute(nums);
console.log(result);
