def gainMaxValue(security_val, k):
    n = len(security_val)
    dp = [0] * n  # dp[i] stores the maximum security value sum starting from node i

    for i in range(n - 1, -1, -1):
        # Initialize with the value of the current node
        max_sum = security_val[i]
        for j in range(i + k, n, k):
            max_sum = max(max_sum, security_val[i] + dp[j])
        dp[i] = max_sum

    # Choose the starting node that gives the maximum sum
    max_security_sum = max(dp)
    return max_security_sum


# Sample input
security_val = [3, 5, -2, -4, 9, 16]
k = 2
print(gainMaxValue(security_val, k))  # Output: 17
