class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # Create a sorted copy of the input list
        sorted_nums = sorted(nums)

        # Create a dictionary to store the count of numbers
        count_dict = {}

        # Populate the count_dict with the count of each unique number
        for i, num in enumerate(sorted_nums):
            if num not in count_dict:
                count_dict[num] = i

        # Create a list of counts based on the original order of the input list
        result = [count_dict[num] for num in nums]

        return result


# Example usage:
solution = Solution()
nums = [8, 1, 2, 2, 3]
output = solution.smallerNumbersThanCurrent(nums)
print(output)
