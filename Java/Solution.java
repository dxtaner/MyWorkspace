import java.util.ArrayList;
import java.util.List;

class Result {
    public static int gainMaxValue(List<Integer> security_val, int k) {
        int n = security_val.size();
        int[] dp = new int[n];

        dp[0] = security_val.get(0);

        for (int i = 1; i < n; i++) {
            int maxSecurityValue = Integer.MIN_VALUE;
            for (int j = Math.max(0, i - k); j < i; j++) {
                maxSecurityValue = Math.max(maxSecurityValue, dp[j] + security_val.get(i));
            }
            dp[i] = maxSecurityValue;
        }

        int maxSum = dp[0];
        for (int i = 1; i < n; i++) {
            maxSum = Math.max(maxSum, dp[i]);
        }

        return maxSum;
    }
}


public class Solution {
    public static void main(String[] args) {
        // Test Case 1
        List<Integer> security_val1 = new ArrayList<>();
        security_val1.add(3);
        security_val1.add(5);
        security_val1.add(-2);
        security_val1.add(-4);
        security_val1.add(9);
        security_val1.add(16);
        int k1 = 2;
        int result1 = Result.gainMaxValue(security_val1, k1);
        System.out.println("Test Case 1 Result: " + result1); // Expected: 17

        // Test Case 2
        List<Integer> security_val2 = new ArrayList<>();
        security_val2.add(2);
        security_val2.add(5);
        security_val2.add(-8);
        security_val2.add(-6);
        security_val2.add(-7);
        int k2 = 3;
        int result2 = Result.gainMaxValue(security_val2, k2);
        System.out.println("Test Case 2 Result: " + result2); // Expected: -2
    }
}