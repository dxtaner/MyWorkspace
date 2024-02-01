class Solution(object):
    def lastRemaining(self, n):
        """
        :type n: int
        :rtype: int
        """
        start = 1
        step = 2
        remaining = n
        is_from_left = True

        while remaining > 1:
            if is_from_left or remaining % 2 == 1:
                start += step // 2

            step *= 2
            remaining //= 2
            is_from_left = not is_from_left

        return start


# Example usage:
solution = Solution()
print(solution.lastRemaining(9))  # Output: 6
