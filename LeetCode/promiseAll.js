/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  // Map each function to a Promise
  const promises = functions.map((fn) => fn());

  // Use Promise.all to wait for all promises to resolve
  return Promise.all(promises);
};

// Example usage:
const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // Output: [42]
