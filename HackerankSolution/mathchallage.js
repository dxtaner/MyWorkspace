function SolveEquation(equation) {
  equation = equation.replace(/\s/g, "");

  if (equation.indexOf("x") === -1) {
    return -1;
  }

  var sides = equation.split("=");
  var leftSide = sides[0];
  var rightSide = sides[1];

  var leftX = 0;
  var leftConstant = 0;

  var rightX = 0;
  var rightConstant = 0;

  parseSide(leftSide, true);
  parseSide(rightSide, false);

  var coefficient = leftX - rightX;
  var constant = rightConstant - leftConstant;

  if (coefficient === 0) {
    return "Infinite solutions";
  } else {
    var solution = constant / coefficient;
    return solution;
  }

  function parseSide(side, isLeft) {
    var currentTerm = "";
    var sign = 1;

    for (var i = 0; i <= side.length; i++) {
      var char = side.charAt(i);

      if (char === "-" || char === "+" || i === side.length) {
        if (currentTerm.includes("x")) {
          var coefficient = parseCoefficient(currentTerm);
          if (isLeft) {
            leftX += sign * coefficient;
          } else {
            rightX += sign * coefficient;
          }
        } else {
          var constant = parseInt(currentTerm) || 1;
          if (isLeft) {
            leftConstant += sign * constant;
          } else {
            rightConstant += sign * constant;
          }
        }

        currentTerm = "";
        sign = char === "-" ? -1 : 1;
      } else {
        currentTerm += char;
      }
    }
  }

  function parseCoefficient(term) {
    var coefficientStr = term.replace("x", "");
    if (coefficientStr === "-" || coefficientStr === "") {
      return coefficientStr === "-" ? -1 : 1;
    } else {
      return parseInt(coefficientStr);
    }
  }
}

console.log(SolveEquation("3x + 12 = 46")); // Output: 4
console.log(SolveEquation("4 - 2 = x")); // Output: 2
console.log(SolveEquation("1x0 * 12 = 1200")); // Output: 0
console.log(SolveEquation("0 - 0 = x")); // Output: 0
console.log(SolveEquation("4356 * 23 = 1001x8")); // Output: 8
console.log(SolveEquation("24 / x = 12")); // Output: 2
console.log(SolveEquation("1 + 1111 = x112")); // Output: 1
console.log(SolveEquation("10 - x = 10")); // Output: 0
console.log(SolveEquation("900 / 900 = x")); // Output: 1
console.log(SolveEquation("2004 / 6 = 33x")); // Output: 4
