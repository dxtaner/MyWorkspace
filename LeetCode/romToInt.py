class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Dictionary to map Roman numeral characters to integer values
        roman_to_int = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        # Initialize the result
        result = 0

        # Iterate through the string
        for i in range(len(s)):
            # If the current numeral is smaller than the next numeral, subtract its value
            if i < len(s) - 1 and roman_to_int[s[i]] < roman_to_int[s[i + 1]]:
                result -= roman_to_int[s[i]]
            # Otherwise, add its value
            else:
                result += roman_to_int[s[i]]

        return result


# Example usage:
solution = Solution()
print(solution.romanToInt("III"))  # Output: 3
print(solution.romanToInt("IV"))   # Output: 4
print(solution.romanToInt("IX"))   # Output: 9
print(solution.romanToInt("LVIII"))  # Output: 58
print(solution.romanToInt("MCMXCIV"))  # Output: 1994
