public class FindSecondMaxValue2 {
    public static void main(String[] args) {
        int[] array = { 12, 45, 7, 23, 56, 89 };
        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;

        for (int num : array) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num < max) {
                secondMax = num;
            }
        }

        System.out.println("İkinci en büyük değer: " + secondMax);
    }
}
