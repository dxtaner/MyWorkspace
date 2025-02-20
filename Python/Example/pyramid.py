import math

# Read the pyramid from a file
with open('pyramid.txt') as f:
    pyramid = [[int(num) for num in line.split()] for line in f]

# Initialize the dp array with the bottom row of the pyramid
dp = pyramid[-1]

# Work our way up the pyramid
for i in range(len(pyramid) - 2, -1, -1):
    row = pyramid[i]
    new_dp = []
    for j in range(len(row)):
        if not math.isqrt(row[j])**2 == row[j]:
            # Skip prime numbers
            continue
        # Compute the maximum sum for this position
        max_sum = row[j] + max(dp[j], dp[j+1])
        new_dp.append(max_sum)
    dp = new_dp

# The maximum sum is at the top of the dp array
print(dp[0])
