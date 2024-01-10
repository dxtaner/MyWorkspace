/**
 * Check if an object or array is empty.
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).length === 0;
  }

  return true;
};

// Example usage:
var obj1 = { x: 5, y: 42 };
console.log(isEmpty(obj1)); // false

var obj2 = {};
console.log(isEmpty(obj2)); // true

var arr = [null, false, 0];
console.log(isEmpty(arr)); // false
