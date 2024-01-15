/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let callCount = 0;
  let results = [];

  return function (...args) {
    callCount++;
    let result = fn(...args);

    results.push({ calls: callCount, value: result });

    if (callCount === 1) {
      return result;
    } else {
      return undefined;
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
