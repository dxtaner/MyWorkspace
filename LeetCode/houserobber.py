class Solution(object):
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)

        if n == 0:
            return 0
        elif n == 1:
            return nums[0]

        # Initialize an array to store the maximum amount of money robbed at each house
        dp = [0] * n

        # Base cases
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        # Fill in the DP array using the recurrence relation
        for i in range(2, n):
            dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])

        # The maximum amount of money that can be robbed is the last element in the DP array
        return dp[-1]

# Example usage:
solution = Solution()
print(solution.rob([1, 2, 3, 1]))  # Output: 4
print(solution.rob([2, 7, 9, 3, 1]))  # Output: 12
