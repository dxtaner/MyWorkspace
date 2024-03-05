class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 1:
            return False

        # Find the sum of proper divisors
        divisor_sum = 1  # Start with 1 because every number is divisible by 1
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                divisor_sum += i
                if i != num // i:  # Avoid adding the same divisor twice for perfect squares
                    divisor_sum += num // i

        # Check if the sum of proper divisors equals the original number
        return divisor_sum == num
