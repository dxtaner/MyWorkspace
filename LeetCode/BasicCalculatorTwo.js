/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];
    let num = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        }

        if ((char < '0' && char !== ' ') || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack.push(stack.pop() * num);
            } else if (sign === '/') {
                stack.push(Math.trunc(stack.pop() / num));
            }

            // Reset num and update sign
            num = 0;
            sign = char;
        }
    }

    // Sum up the elements in the stack
    let result = 0;
    while (stack.length > 0) {
        result += stack.pop();
    }

    return result;
};

// Example usage:
console.log(calculate("3+2*2"));  // Output: 7
console.log(calculate("3/2"));    // Output: 1
console.log(calculate("3+5 / 2"));  // Output: 5
