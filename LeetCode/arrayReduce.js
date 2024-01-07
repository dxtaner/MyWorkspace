/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  var accumulator = init !== undefined ? init : nums[0];
  var startIdx = init !== undefined ? 0 : 1;

  for (var i = startIdx; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i], i, nums);
  }

  return accumulator;
};
