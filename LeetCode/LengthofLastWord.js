/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Trim trailing and leading whitespaces
    s = s.trim();

    let length = 0;
    let i = s.length - 1;

    // Iterate from the end of the string until a space is encountered
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};
