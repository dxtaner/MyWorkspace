class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        # Convert the integer to a string
        x_str = str(abs(x))

        # Reverse the string
        reversed_x_str = x_str[::-1]

        # Convert the reversed string back to integer
        reversed_x = int(reversed_x_str)

        # Handle negative sign if the original number was negative
        if x < 0:
            reversed_x = -reversed_x

        # Handle overflow
        if reversed_x < -2**31 or reversed_x > 2**31 - 1:
            return 0

        return reversed_x
