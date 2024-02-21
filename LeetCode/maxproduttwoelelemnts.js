/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length < 2) {
    return 0;
  }

  let max1 = Math.max(nums[0], nums[1]);
  let max2 = Math.min(nums[0], nums[1]);

  let secondMax1 = max2;
  let secondMax2 = max1;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max2 = nums[i];
    }

    if (nums[i] < secondMax1) {
      secondMax2 = secondMax1;
      secondMax1 = nums[i];
    } else if (nums[i] < secondMax2) {
      secondMax2 = nums[i];
    }
  }

  return Math.max((max1 - 1) * (max2 - 1), (secondMax1 - 1) * (secondMax2 - 1));
};
