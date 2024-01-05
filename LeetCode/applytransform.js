/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn.length === 1) {
      result.push(fn(arr[i]));
    } else {
      result.push(fn(arr[i], i));
    }
  }

  return result;
};
