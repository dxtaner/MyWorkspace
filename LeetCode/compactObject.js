/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    // If input is an array, filter out falsy values and apply compactObject recursively
    return obj
      .filter(Boolean)
      .map((item) => (typeof item === "object" ? compactObject(item) : item));
  } else if (typeof obj === "object" && obj !== null) {
    // If input is an object, filter out falsy values from its values and apply compactObject recursively
    const compactedObj = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (Boolean(value)) {
        compactedObj[key] =
          typeof value === "object" ? compactObject(value) : value;
      }
    });
    return compactedObj;
  } else {
    // If input is neither an object nor an array, return the input itself
    return obj;
  }
};

// Examples
const example1 = [null, 0, false, 1];
console.log(compactObject(example1)); // Output: [1]

const example2 = { a: null, b: [false, 1] };
console.log(compactObject(example2)); // Output: {"b": [1]}

const example3 = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(example3)); // Output: [5, [], [16]]
