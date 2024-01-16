/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let currentNumber = 0;
  let sign = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else if (char === "+") {
      result += sign * currentNumber;
      currentNumber = 0;
      sign = 1;
    } else if (char === "-") {
      result += sign * currentNumber;
      currentNumber = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ")") {
      result += sign * currentNumber;
      currentNumber = 0;
      result *= stack.pop();
      result += stack.pop();
    }
  }

  result += sign * currentNumber;

  return result;
};

