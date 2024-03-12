import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

    public static int getMaxValueSum(List<Integer> encrypted_file, List<Integer> binary, int k) {
        int maxSum = 0;
        int currentSum = 0;

        for (int i = 0; i < encrypted_file.size(); i++) {
            if (binary.get(i) == 1) {
                currentSum += encrypted_file.get(i);
            }
        }

        maxSum = currentSum;

        for (int i = 0; i < encrypted_file.size(); i++) {
            if (binary.get(i) == 0) {
                currentSum += encrypted_file.get(i);
            }

            if (i >= k && binary.get(i - k) == 0) {
                currentSum -= encrypted_file.get(i - k);
            }

            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int encrypted_fileCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> encrypted_file = Arrays.stream(bufferedReader.readLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int binaryCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> binary = Arrays.stream(bufferedReader.readLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        int k = Integer.parseInt(bufferedReader.readLine().trim());

        int result = getMaxValueSum(encrypted_file, binary, k);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
