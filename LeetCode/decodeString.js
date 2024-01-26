/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push({ num: currentNum, str: currentStr });
      currentNum = 0;
      currentStr = "";
    } else if (char === "]") {
      let { num, str } = stack.pop();
      currentStr = str + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }

  return currentStr;
};
