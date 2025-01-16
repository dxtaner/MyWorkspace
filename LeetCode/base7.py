class Solution(object):
    def convertToBase7(self, num):
        """
        Converts a given integer to its representation in base 7.
        
        :type num: int
        :rtype: str
        """
        # Special case: if the number is 0, its base-7 representation is "0".
        if num == 0:
            return "0"

        result = ""  # String to store the base-7 representation.
        is_negative = False  # Flag to track if the number is negative.

        # Check if the number is negative.
        if num < 0:
            is_negative = True  # Mark the number as negative.
            num = abs(num)  # Work with the absolute value of the number.

        # Convert the number to base 7.
        while num > 0:
            remainder = num % 7  # Find the remainder when dividing by 7.
            result = str(remainder) + result  # Append the remainder to the result.
            num //= 7  # Update the number by dividing it by 7.

        # If the original number was negative, add the negative sign.
        if is_negative:
            result = "-" + result

        # Return the base-7 representation as a string.
        return result

