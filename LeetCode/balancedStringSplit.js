var balancedStringSplit = function(s) {
    let balanceCount = 0; // Initialize the count for balanced substrings
    let countL = 0; // Initialize count for 'L'
    let countR = 0; // Initialize count for 'R'
    
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Increment the count of 'L' or 'R' based on the character
        if (s[i] === 'L') {
            countL++;
        } else {
            countR++;
        }
        
        // If the counts of 'L' and 'R' are equal, it forms a balanced substring
        if (countL === countR) {
            balanceCount++; // Increment the count of balanced substrings
            countL = 0; // Reset the counts for the next substring
            countR = 0;
        }
    }
    
    return balanceCount; // Return the total count of balanced substrings
};
