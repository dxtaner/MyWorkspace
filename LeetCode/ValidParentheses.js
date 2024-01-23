/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = { '(': ')', '[': ']', '{': '}' };

    for (let char of s) {
        if (brackets[char]) {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket
            // Pop the top element from the stack and check if it matches the expected pair
            const top = stack.pop();
            if (!top || brackets[top] !== char) {
                return false; // Mismatched brackets
            }
        }
    }

    // Check if there are any remaining brackets in the stack
    return stack.length === 0;
};
