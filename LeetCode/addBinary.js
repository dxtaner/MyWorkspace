/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;

  while (a.length < b.length) {
    a = "0" + a;
  }
  while (b.length < a.length) {
    b = "0" + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
};
