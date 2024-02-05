class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        # Define the Roman numeral representations
        values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
        symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        
        roman_numeral = ''
        
        # Iterate through the values and symbols
        for i, value in enumerate(values):
            while num >= value:
                num -= value
                roman_numeral += symbols[i]
        
        return roman_numeral
