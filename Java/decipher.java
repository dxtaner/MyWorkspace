import java.util.HashMap;
import java.util.Map;

class Solution {
    public int decipher(int[] nums) {
        if (nums == null || nums.length == 0) {
            return -1;
        }

        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        int maxFrequency = 0;
        int smallestNumber = Integer.MAX_VALUE;
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            int num = entry.getKey();
            int freq = entry.getValue();
            if (freq > maxFrequency || (freq == maxFrequency && num < smallestNumber)) {
                maxFrequency = freq;
                smallestNumber = num;
            }
        }

        return smallestNumber;
    }

    public static void main(String[] args) {
        // Example usage:
        Solution solution = new Solution();
        int[] numbers = {5, 1, 4, 4, 2, 2};
        int result = solution.decipher(numbers);
        System.out.println(result);
    }
}
