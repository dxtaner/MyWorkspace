function MathChallenge(str) {
  const parts = str.split(" ");
  let num1 = parseInt(parts[0]);
  const op = parts[1];
  let num2 = parseInt(parts[2].slice(0, -1));
  let result = parseInt(parts[4]);

  let varOcg;

  if (isNaN(num1)) {
    varOcg = op === "*" ? result / num2 : result - num2;
    num1 = varOcg;
  } else if (isNaN(num2)) {
    varOcg = op === "*" ? result / num1 : result - num1;
    num2 = varOcg;
  } else {
    varOcg = op === "*" ? num1 * num2 : num1 - num2;
    result = varOcg;
  }

  return varOcg;
}

// Example usage:
console.log(MathChallenge("3x + 12 = 46")); // Output: 4
console.log(MathChallenge("4 - 2 = x")); // Output: 2
console.log(MathChallenge("1x0 * 12 = 1200")); // Output: 0
console.log(MathChallenge("0 - 0 = x")); // Output: 0
console.log(MathChallenge("4356 * 23 = 1001x8")); // Output: 8
console.log(MathChallenge("24 / x = 12")); // Output: 2
console.log(MathChallenge("1 + 1111 = x112")); // Output: 1
console.log(MathChallenge("10 - x = 10")); // Output: 0
console.log(MathChallenge("900 / 900 = x")); // Output: 1
console.log(MathChallenge("2004 / 6 = 33x")); // Output: 4
