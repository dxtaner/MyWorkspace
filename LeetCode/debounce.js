/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};

// Example usage:
const log = debounce(console.log, 100);

log("Hello"); // This call will be cancelled
log("Hello"); // This call will be cancelled
log("Hello"); // This call will be logged after 100ms
