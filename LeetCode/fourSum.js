/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    // Avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      // Avoid duplicates
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          // Avoid duplicates
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};
